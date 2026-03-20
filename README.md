# Proyecto: React Navigation

- Creación del proyecto:
  - **_npx @react-native-community/cli init nombreProyecto_**

## Herramientas y/o Tecnologías

- React
- React Navigation

  - No tiene una forma de enlazar unos componentes con otros.
  - EN HTML usualmente utilizamos el _<a></a>_ para llevar a nuestros usuarios a lo largo de diferentes páginas.
  - Soluciona el problema donde requerimos llevar a nuestros usuarios a diferentes componentes de acuerdo a sus acciones.
  - Navegación tipo _STACK_.
  - Instalación:
    - **_npm install @react-navigation/native_**
    - **_npm install react-native-screens react-native-safe-area-context_**
    - **_npm install @react-navigation/native-stack_**
    - **_npm install react-native-gesture-handler_**
  - Configuración:

    - Dentro del archivo: _android/app/src/main/java/com/reactnavigation/MainActivity.kt_
    - ```
      package com.reactnavigation

      import android.os.Bundle
      import com.facebook.react.ReactActivity
      import com.facebook.react.ReactActivityDelegate
      import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
      import com.facebook.react.defaults.DefaultReactActivityDelegate

      class MainActivity : ReactActivity() {
        override fun onCreate(savedInstanceState: Bundle?) {
            super.onCreate(null)
        }

        /**
        * Returns the name of the main component registered from JavaScript. This is used to schedule
        * rendering of the component.
        */
        override fun getMainComponentName(): String = "reactNavigation"

        /**
        * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
        * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
        */
        override fun createReactActivityDelegate(): ReactActivityDelegate =
            DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)
      }
      ```

    ```

    ```

  - También debemos configurar el archivo: _android/app/build.gradle_
    - ```
        dependencies {
        // The version of react-native is set by the React Native Gradle Plugin
        implementation 'androidx.appcompat:appcompat:1.1.0-rc01'
        implementation 'androidx.swiperefreshlayout:swiperefreshlayout:1.1.0-alpha02'
        implementation("com.facebook.react:react-android")
    
            if (hermesEnabled.toBoolean()) {
                implementation("com.facebook.react:hermes-android")
            } else {
                implementation jscFlavor
            }
    
        }

        ```

  - Debemos reiniciar la APP para que se aplique la configuración.
  - Una vez configurado, en el _APP.js_, agregamos al inicio:
    - **_import 'react-native-gesture-handler';_**
  -
