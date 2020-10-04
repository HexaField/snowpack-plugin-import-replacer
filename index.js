module.exports = function (snowpackConfig, pluginOptions) {

  return {
    name: 'snowpack-plugin-import-replacer',
    async transform({fileExt, contents, isDev}) { 
      
      if(isDev) return;
      const { extensions, modules } = pluginOptions;
      if (!extensions.includes(fileExt) || !contents) return;

      const keys = Object.keys(modules);
      const values = Object.values(modules);
      
      // console.log(contents.split('\n').filter((line) => line.includes('import')));
      keys.forEach((key, i) => {
        contents = contents.replace('from \''+key+'\'', 'from \''+values[i]+'\'');
        contents = contents.replace('from\''+key+'\'', 'from\''+values[i]+'\'');
        contents = contents.replace('from \"'+key+'\"', 'from \"'+values[i]+'\"');
        contents = contents.replace('from \"'+key+'\"', 'from\"'+values[i]+'\"');

        contents = contents.replace('import('+key+')', 'import('+values[i]+')');
        contents = contents.replace('import ('+key+')', 'import ('+values[i]+')');
      });
      // console.log(contents.split('\n').filter((line) => line.includes('import')));

      return contents;
    }
  };
};