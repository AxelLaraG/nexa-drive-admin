package com.rentacar.admin

import android.content.Intent
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class UnityModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "UnityModule"
    }

    @ReactMethod
    fun launchUnity() {
        val currentActivity = currentActivity
        currentActivity?.let {
            val intent = Intent(it, com.unity3d.player.UnityPlayerActivity::class.java)
            it.startActivity(intent)
        }
    }
}
