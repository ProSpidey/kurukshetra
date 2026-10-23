// Preserves the original menu artwork outside the deployable web/ folder.
// Run this after overlaying the v66 source patch onto the existing v65 source,
// before `node scripts/build.mjs`. Idempotent, file-list scoped.
import {mkdir,rename,access} from 'node:fs/promises';
const names=['background','solo','local','lore-duel','lore-trial','offline-battle','online-battle','settings','how-to-play','controls','krishna-center','online'];
await mkdir('production/home-ui-master',{recursive:true});
for(const name of names){const src=`web/home-ui/${name}.png`,dst=`production/home-ui-master/${name}.png`;
 try{await access(src);await rename(src,dst);console.log('Preserved',name+'.png');}
 catch(e){if(e.code!=='ENOENT')throw e;}
}
console.log('Menu artwork ready; the v66 WebP assets must be present in web/home-ui/.');
