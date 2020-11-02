package com.reactnativelatlon

import android.util.Log
import com.facebook.react.bridge.*
import okhttp3.OkHttpClient
import okhttp3.Request
import java.io.IOException
import com.alibaba.fastjson.JSON

class LatlonModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

   private val client: OkHttpClient = OkHttpClient()

    override fun getName(): String {
        return "Latlon"
    }


    @ReactMethod
    fun getIp(promise: Promise) {
      try {
          promise.resolve(getCountryCode())
      } catch (e:IOException) {
          promise.reject(e);
      }
    }


    @Throws(IOException::class)
    fun getCountryCode(): ReadableMap {
      val map = WritableNativeMap()
      val request = Request.Builder().url("https://api-geolocation.zeit.sh").build()
      val response = client.newCall(request).execute().body()!!.string()
      val parse = JSON.parseObject(response)
      map.putString("country",parse.getString("country"))
      map.putString("city",parse.getString("city"))
      map.putDouble("lat",parse.getDouble("lat"))
      map.putDouble("lon",parse.getDouble("lon"))
      return map
    }


}
