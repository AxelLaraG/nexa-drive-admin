package com.rentacar.admin

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.unity3d.player.UnityPlayerActivity
import android.content.Intent

class UnityModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "UnityModule" // Este es el nombre que usarás en JavaScript
    }

    @ReactMethod
    fun startUnityAR() {
        val intent = Intent(currentActivity, UnityPlayerActivity::class.java)
        currentActivity?.startActivity(intent)
    }
}