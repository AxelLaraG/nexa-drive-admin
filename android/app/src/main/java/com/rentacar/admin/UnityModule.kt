package com.rentacar.admin

import android.content.Intent
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class UnityModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "UnityModule"
    }

    @ReactMethod
    /*fun launchUnity() {
        val activity = currentActivity
        if (activity != null) {
            val intent = Intent(activity, UnityActivity::class.java)
            activity.startActivity(intent)
        }
    }*/

    @ReactMethod
fun launchUnity() {
    throw RuntimeException("UnityModule fue llamado")
}
}