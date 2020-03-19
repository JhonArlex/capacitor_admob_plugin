import { WebPlugin } from '@capacitor/core';
import { AdmobPluginPlugin } from './definitions';

export class AdmobPluginWeb extends WebPlugin implements AdmobPluginPlugin {
  constructor() {
    super({
      name: 'AdmobPlugin',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }
}

const AdmobPlugin = new AdmobPluginWeb();

export { AdmobPlugin };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(AdmobPlugin);
