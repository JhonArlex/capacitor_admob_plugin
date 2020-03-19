declare module "@capacitor/core" {
  interface PluginRegistry {
    AdmobPlugin: AdmobPluginPlugin;
  }
}

export interface AdmobPluginPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
}
