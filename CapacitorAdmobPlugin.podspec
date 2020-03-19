
  Pod::Spec.new do |s|
    s.name = 'CapacitorAdmobPlugin'
    s.version = '0.0.1'
    s.summary = 'Desarrollo de un plugin que soporte publicidad para android, ios y web(pwa)'
    s.license = 'MIT'
    s.homepage = 'https://github.com/JhonArlex/capacitor_admob_plugin'
    s.author = 'Jhon Arlex Ocampo Cifuentes'
    s.source = { :git => 'https://github.com/JhonArlex/capacitor_admob_plugin', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end