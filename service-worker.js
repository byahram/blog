/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "9c525df0ffb8e3ba660287c32d5b0a41"
  },
  {
    "url": "assets/css/0.styles.8a6b1c95.css",
    "revision": "f3a755fb55992265fbf6f17c628ba0f8"
  },
  {
    "url": "assets/img/20240304_1.36d34bb5.png",
    "revision": "36d34bb5dd7df38ca0a8ac32c5e3a162"
  },
  {
    "url": "assets/img/221026_1.30077d71.png",
    "revision": "30077d710524ab041fc9cf3c4778fad3"
  },
  {
    "url": "assets/img/221026_2.206f8055.png",
    "revision": "206f8055f898031f4b12b2bfb3ca07b3"
  },
  {
    "url": "assets/img/221026_3.5eb37037.png",
    "revision": "5eb3703714e7ae84995b41d132a80ab6"
  },
  {
    "url": "assets/img/221026_4.58e9dc8b.png",
    "revision": "58e9dc8bb466277c5fffbc485379101f"
  },
  {
    "url": "assets/img/221026_5.83925e0d.png",
    "revision": "83925e0d79b67a9fafa6b4ee0ca76e18"
  },
  {
    "url": "assets/img/221026_6.2ecd97c8.png",
    "revision": "2ecd97c857f7d540825ca7e25992dcd6"
  },
  {
    "url": "assets/img/221026_7.8af0e898.png",
    "revision": "8af0e898d56ce28f57a7154b119b10a7"
  },
  {
    "url": "assets/img/221026_8.bbc52259.png",
    "revision": "bbc5225903819b139dcb001bc9ecccca"
  },
  {
    "url": "assets/img/221121_1.5b98e57d.png",
    "revision": "5b98e57d619c67c7b8ec64281ad3ecf3"
  },
  {
    "url": "assets/img/221122_1.bedae9a1.png",
    "revision": "bedae9a1a3fd142b8ee40dd4b90f08b0"
  },
  {
    "url": "assets/img/221122_2.8a0615db.png",
    "revision": "8a0615db1e2a46265e2f16b2a27c4ee3"
  },
  {
    "url": "assets/img/221122_4.60693de6.png",
    "revision": "60693de6bf53bf67331af277b7268ed7"
  },
  {
    "url": "assets/img/221123_1.525db94e.png",
    "revision": "525db94ed490ef561ce23016394a6439"
  },
  {
    "url": "assets/img/221123_2.b26af5d4.png",
    "revision": "b26af5d4a7780049933a4892f3fec16e"
  },
  {
    "url": "assets/img/221124_1.c7333673.png",
    "revision": "c73336736c530b9d7c7a8e0f26f4825e"
  },
  {
    "url": "assets/img/221124_2.d274559f.png",
    "revision": "d274559fcf21d777e777c78a1e016d59"
  },
  {
    "url": "assets/img/221124_3.036b3c05.png",
    "revision": "036b3c05faac0387b2e7935e81ba0782"
  },
  {
    "url": "assets/img/221124_4.a07efefb.png",
    "revision": "a07efefb44271527e7fcb88ef4fd71bf"
  },
  {
    "url": "assets/img/221124_5.32e30bf8.png",
    "revision": "32e30bf89faebe9929d986f2d56c7dea"
  },
  {
    "url": "assets/img/221129_1.72bef75f.png",
    "revision": "72bef75f78267b48c2ebf62762ee46c6"
  },
  {
    "url": "assets/img/221129_2.14b2b973.png",
    "revision": "14b2b97346a2d891bfc40335553d6038"
  },
  {
    "url": "assets/img/221129_3.ead9c8f6.png",
    "revision": "ead9c8f692c1ce93470d73cc516f8898"
  },
  {
    "url": "assets/img/221130_1.d7750c34.png",
    "revision": "d7750c344152444fd4b3a67fe1c314d9"
  },
  {
    "url": "assets/img/221202_1.792d9555.png",
    "revision": "792d9555fa9df7c97ab61799ef6393a5"
  },
  {
    "url": "assets/img/221202_2.4616e389.png",
    "revision": "4616e3898a3eb715f9ca2ed3470199c9"
  },
  {
    "url": "assets/img/221202_3.15990e1a.jpg",
    "revision": "15990e1ac2c4fc43be1403fd61e90cee"
  },
  {
    "url": "assets/img/221203_1.d6c4f357.png",
    "revision": "d6c4f3570d9ee533260b336572b5431d"
  },
  {
    "url": "assets/img/221203_10.c5518d0b.png",
    "revision": "c5518d0bd630317292e720b9f59936e9"
  },
  {
    "url": "assets/img/221203_11.c6fdac99.png",
    "revision": "c6fdac99da9cc14e6561549276f2bcbe"
  },
  {
    "url": "assets/img/221203_13.8b24c596.png",
    "revision": "8b24c5962527de83589dfe9934ccf382"
  },
  {
    "url": "assets/img/221203_14.ec80caa5.png",
    "revision": "ec80caa5a1cc367a11670c451012c39c"
  },
  {
    "url": "assets/img/221203_15.9e49b943.png",
    "revision": "9e49b943634a30f166a3552aa87a2f89"
  },
  {
    "url": "assets/img/221203_16.e451766c.png",
    "revision": "e451766c3ed17e0bbf88d84e921da52e"
  },
  {
    "url": "assets/img/221203_17.7447043f.png",
    "revision": "7447043f078d1f1a6942112804a0da7c"
  },
  {
    "url": "assets/img/221203_19.164194d1.png",
    "revision": "164194d1432858425c25268fdc481d0a"
  },
  {
    "url": "assets/img/221203_2.a754b0a3.png",
    "revision": "a754b0a317edbb0749f1402b265d5883"
  },
  {
    "url": "assets/img/221203_20.82bb88f3.png",
    "revision": "82bb88f360a0cbfdc6804f83b5802812"
  },
  {
    "url": "assets/img/221203_21.93ba6363.png",
    "revision": "93ba636331ab636912723e0151b40d04"
  },
  {
    "url": "assets/img/221203_23.9e345fb5.png",
    "revision": "9e345fb5131782b8841f77904f8cfeab"
  },
  {
    "url": "assets/img/221203_24.919f1750.png",
    "revision": "919f175087a87dad33cc2c8cb989a4c3"
  },
  {
    "url": "assets/img/221203_25.3e21a829.png",
    "revision": "3e21a8298d6aea24ebbcbc0d4fab3432"
  },
  {
    "url": "assets/img/221203_3.65e35648.png",
    "revision": "65e35648ff700878837dbfdd92df5ac8"
  },
  {
    "url": "assets/img/221203_4.f848aa0b.png",
    "revision": "f848aa0bc496e0425b097d4e61dc1612"
  },
  {
    "url": "assets/img/221203_5.2dcbef10.png",
    "revision": "2dcbef10d72cb86893385e7741144f6c"
  },
  {
    "url": "assets/img/221203_6.a3a8ab3e.png",
    "revision": "a3a8ab3e03eedc04141c5019887f1e23"
  },
  {
    "url": "assets/img/221203_7.ed1fca70.png",
    "revision": "ed1fca70f80f3ff25e29c4b64afbe240"
  },
  {
    "url": "assets/img/221203_8.7a98d976.png",
    "revision": "7a98d9761ef6185a63bda5e8236d2955"
  },
  {
    "url": "assets/img/221203_9.670b7d24.png",
    "revision": "670b7d24c2361c63a81008ddbcf6a656"
  },
  {
    "url": "assets/img/221205_1.a4c2b858.png",
    "revision": "a4c2b858be587499bfc9843ad2402ede"
  },
  {
    "url": "assets/img/221205_2.3664464a.png",
    "revision": "3664464ab6953c62798b8669b382c29b"
  },
  {
    "url": "assets/img/221205_3.ce299887.png",
    "revision": "ce2998876b03ec5c1348634b12e83517"
  },
  {
    "url": "assets/img/221205_4.07feee53.png",
    "revision": "07feee5387aed0b2ed51b3ae0d6d9899"
  },
  {
    "url": "assets/img/221205_5.2e86711e.png",
    "revision": "2e86711ed5e0d600c77f397813f5073f"
  },
  {
    "url": "assets/img/221205_6.95de9247.png",
    "revision": "95de9247734022a9369587e9125dc1b3"
  },
  {
    "url": "assets/img/221205_7.cd6c24dd.png",
    "revision": "cd6c24dd3cfdc285624394124e5b267a"
  },
  {
    "url": "assets/img/221205_8.864920c7.png",
    "revision": "864920c79b5ecb9b54b8698cdab90ba5"
  },
  {
    "url": "assets/img/221207_1.a8f7133a.png",
    "revision": "a8f7133a603595c4e977bffd6c9bf8d2"
  },
  {
    "url": "assets/img/221207_2.4f9d286c.png",
    "revision": "4f9d286c89a473a79ae87b1dc5c563a8"
  },
  {
    "url": "assets/img/221207_3.9b5d78a6.png",
    "revision": "9b5d78a625e38bafcb508c267d2f917c"
  },
  {
    "url": "assets/img/221209_1.eb0b2c89.png",
    "revision": "eb0b2c8920a085a082ec4b51d02e0297"
  },
  {
    "url": "assets/img/230116_1.988047aa.png",
    "revision": "988047aa9af631200f22c55c68a79282"
  },
  {
    "url": "assets/img/230116_2.46ef482f.png",
    "revision": "46ef482fa0a309d68fd0da5143564e64"
  },
  {
    "url": "assets/img/230116_3.e0ece350.png",
    "revision": "e0ece350c5f19ab982f51a35b92193ac"
  },
  {
    "url": "assets/img/230117_1.f7fa6170.png",
    "revision": "f7fa6170602f9311e70b6829c8db5eba"
  },
  {
    "url": "assets/img/230118_1.7d8fd9c2.png",
    "revision": "7d8fd9c27a9a188923f85f2e7947903a"
  },
  {
    "url": "assets/img/230118_10.292ef39d.png",
    "revision": "292ef39de3b1a47b6b48a98a5f8ae5ba"
  },
  {
    "url": "assets/img/230118_11.2b0e6565.png",
    "revision": "2b0e65652a20c029ff591b3f05e08184"
  },
  {
    "url": "assets/img/230118_2.ebaaaf46.png",
    "revision": "ebaaaf46af1bc9420134234c900ec21d"
  },
  {
    "url": "assets/img/230118_3.e7c834c7.png",
    "revision": "e7c834c71bad7ae62dc9a8607bed6713"
  },
  {
    "url": "assets/img/230118_4.5814e163.png",
    "revision": "5814e163b268fb3888d103f176bca712"
  },
  {
    "url": "assets/img/230118_5.84da00f4.png",
    "revision": "84da00f402cb36b0509b32856404c717"
  },
  {
    "url": "assets/img/230118_6.c897cd2d.png",
    "revision": "c897cd2dd2e31256624f41b87b5d01f8"
  },
  {
    "url": "assets/img/230118_7.0cef7a46.png",
    "revision": "0cef7a46c4c9dd005589b0b835790777"
  },
  {
    "url": "assets/img/230118_8.049e1b1c.png",
    "revision": "049e1b1ce85c44234d44d2a5402af055"
  },
  {
    "url": "assets/img/230118_9.91e13538.png",
    "revision": "91e135389b4d85c956c7b483e01269cc"
  },
  {
    "url": "assets/img/230126_1.e66bc97c.png",
    "revision": "e66bc97c1531120f44e5886125c99151"
  },
  {
    "url": "assets/img/230126_2.57b87475.png",
    "revision": "57b8747562c1a6c1f448cdf684b8fb07"
  },
  {
    "url": "assets/img/230126_3.e1e29ff3.png",
    "revision": "e1e29ff36021d885c8594508b550dc47"
  },
  {
    "url": "assets/img/230126_4.e214a352.png",
    "revision": "e214a352e75914708f7ec5c0e7cb4ec0"
  },
  {
    "url": "assets/img/230126_5.5169e5a0.png",
    "revision": "5169e5a023cd92254305aa49773ed0ab"
  },
  {
    "url": "assets/img/230126_6.0fca8e8f.png",
    "revision": "0fca8e8f52b8e48c22a3f02ee4a412df"
  },
  {
    "url": "assets/img/230126_7.52dc0017.png",
    "revision": "52dc0017a9802c9f7c774b41aed8b7ab"
  },
  {
    "url": "assets/img/230131_1.e1835f84.png",
    "revision": "e1835f84ca53bd0cefa2ed50b44010ee"
  },
  {
    "url": "assets/img/230131_2.ab86f059.png",
    "revision": "ab86f059a1b33637b42234b38f2e2792"
  },
  {
    "url": "assets/img/230131_3.a802ebe1.png",
    "revision": "a802ebe1f95210b862bcb01dfdb81bae"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.c61faf41.js",
    "revision": "b32fff3ff8a92c2291506b9e2b8c9ef9"
  },
  {
    "url": "assets/js/10.d67ea89a.js",
    "revision": "2ec9ead8b9b0f05e0509027d7c74e8c1"
  },
  {
    "url": "assets/js/11.69dd62c1.js",
    "revision": "ff4f7fa14b63f141954f1c6036c7e397"
  },
  {
    "url": "assets/js/12.0358ccac.js",
    "revision": "844cef8c2a440d0054ccca2f171bac19"
  },
  {
    "url": "assets/js/13.d4dd991b.js",
    "revision": "d32cfb67301236627a951541cb01e521"
  },
  {
    "url": "assets/js/14.1bf1ca75.js",
    "revision": "d5baf9e941e594a8644034239b093d2f"
  },
  {
    "url": "assets/js/15.f143d225.js",
    "revision": "d2f2f66af5d467c7aef3ace9fcc8784b"
  },
  {
    "url": "assets/js/16.f69250a2.js",
    "revision": "35eba38a9055d5af9b0b1b4bcc0d297c"
  },
  {
    "url": "assets/js/17.1088283d.js",
    "revision": "4295e6db2b453ca20110587f5050b902"
  },
  {
    "url": "assets/js/18.c3dd01fc.js",
    "revision": "0e714c7d7af752816ae21cda9008137a"
  },
  {
    "url": "assets/js/19.a99426f6.js",
    "revision": "cbb63e3274008b5998559438a3bf18e4"
  },
  {
    "url": "assets/js/2.a90eea01.js",
    "revision": "b5f28b50dd23bde9234c1f3e66b0b2c9"
  },
  {
    "url": "assets/js/20.4d4a1fef.js",
    "revision": "3cf25073291f4dc924d2831cb774521a"
  },
  {
    "url": "assets/js/21.8ad7406c.js",
    "revision": "381b812a828f001e7b4faa76fabdae85"
  },
  {
    "url": "assets/js/22.0e9d9a51.js",
    "revision": "e79fe2cbf8f798a8123303a01b9684b3"
  },
  {
    "url": "assets/js/23.b583b6ee.js",
    "revision": "bba653fdab94174bcad64ea48767923a"
  },
  {
    "url": "assets/js/24.0e637435.js",
    "revision": "3b2e6b9b8a5233482a8fc2798b5c9ba9"
  },
  {
    "url": "assets/js/25.b939acdf.js",
    "revision": "eb6e70239a858a4997027cb95ec7ce37"
  },
  {
    "url": "assets/js/26.bd507a52.js",
    "revision": "451b55cd1ce051ee0e8964b0929a19d5"
  },
  {
    "url": "assets/js/27.d7c9a1c8.js",
    "revision": "6b1dcc6fdfb83578eea408b7906245f0"
  },
  {
    "url": "assets/js/28.dab2eaa2.js",
    "revision": "d1644490752dace337a6067bfa6430b1"
  },
  {
    "url": "assets/js/29.21c7fac1.js",
    "revision": "0652c8b28c7ae0a0aa16e7a77cd908a0"
  },
  {
    "url": "assets/js/3.e8334cc8.js",
    "revision": "2aa57579e27ba785dc6bf1ccd5db18f9"
  },
  {
    "url": "assets/js/30.e309a192.js",
    "revision": "350e7d76b19255b28dbc2c8516f22e17"
  },
  {
    "url": "assets/js/31.324b974f.js",
    "revision": "5bfd6f8907f22dff5e5f67083b05ca49"
  },
  {
    "url": "assets/js/32.766ce298.js",
    "revision": "adc79f7fbbc4acca4a3da2bbd482a66a"
  },
  {
    "url": "assets/js/33.c99c457a.js",
    "revision": "94c4cfa50c7f1fe85520f192ef7463ee"
  },
  {
    "url": "assets/js/34.036c45a4.js",
    "revision": "c975f343ac717553198a4f0341ebad6f"
  },
  {
    "url": "assets/js/35.292b9922.js",
    "revision": "9828c0f451c897eb875f5fc261d303c0"
  },
  {
    "url": "assets/js/36.21c5a4e2.js",
    "revision": "06c52b2c7a882a557713cbfb1e1b234a"
  },
  {
    "url": "assets/js/37.6794e076.js",
    "revision": "add43deb6c2dbae1ae9fc5cb19a618dd"
  },
  {
    "url": "assets/js/38.fae5e478.js",
    "revision": "a1efff70e6fc9b716373d29c09c7c982"
  },
  {
    "url": "assets/js/39.8bf9c17f.js",
    "revision": "f5d13a74b2566c3256f5e89992654c56"
  },
  {
    "url": "assets/js/4.b19ffe66.js",
    "revision": "fd0607deb536da740cbecff1bf8a6f97"
  },
  {
    "url": "assets/js/40.64e97660.js",
    "revision": "d876e5e7c04e476e97a1bd36ef24d56c"
  },
  {
    "url": "assets/js/41.2ccd54a7.js",
    "revision": "3224a5867dcaceb086f7fd8e478dcb80"
  },
  {
    "url": "assets/js/42.920b2a96.js",
    "revision": "36ddd1ba213bd81fb0de52ef405b677e"
  },
  {
    "url": "assets/js/43.d76bc76f.js",
    "revision": "1c9f0fa210df75adb688c94ea3df7a88"
  },
  {
    "url": "assets/js/44.f3b88a98.js",
    "revision": "923616dd77a7ddc73e8285cf153d9bc1"
  },
  {
    "url": "assets/js/45.c72faa19.js",
    "revision": "ddf2e2a0f930a85df34fcb51406a43d7"
  },
  {
    "url": "assets/js/46.0152dd17.js",
    "revision": "0091cf6bc91850e94f2825869103748a"
  },
  {
    "url": "assets/js/47.0c8a93c9.js",
    "revision": "910e70762ad2f4aaf878065b5983c7f9"
  },
  {
    "url": "assets/js/48.75d4b569.js",
    "revision": "c75ea33bfcbfe8fe912635d97d6a28fa"
  },
  {
    "url": "assets/js/49.ca7bdf7b.js",
    "revision": "4df5f41636caa9bb6e621371f104545a"
  },
  {
    "url": "assets/js/5.f18789f5.js",
    "revision": "2c9bc69821e9fe17c01c66427cc9f70a"
  },
  {
    "url": "assets/js/50.e80b9c23.js",
    "revision": "2810d692438b2697fed2bd3b02e6f44e"
  },
  {
    "url": "assets/js/51.b9287d21.js",
    "revision": "d13a7d559c0639e93e9006874923438e"
  },
  {
    "url": "assets/js/52.40a73b1d.js",
    "revision": "e917a75b6cd3839444063bf1f1f0696e"
  },
  {
    "url": "assets/js/53.ce52f629.js",
    "revision": "0e0fe67b3b7d573826a4f45c2b314c8f"
  },
  {
    "url": "assets/js/54.f40b284a.js",
    "revision": "118789bc3d901051b8069f075b252f6e"
  },
  {
    "url": "assets/js/55.b374bc26.js",
    "revision": "34c65ef3807e93e9fff7b5804f69b762"
  },
  {
    "url": "assets/js/56.ed48881a.js",
    "revision": "4987d98ca055739fa0d6e2da72d54247"
  },
  {
    "url": "assets/js/57.f4f3c391.js",
    "revision": "8265e68be951c68cc9cd38e7e27c1cf0"
  },
  {
    "url": "assets/js/58.9d1d4a72.js",
    "revision": "3a297e23f1c4cc8301e5508c09db1c9e"
  },
  {
    "url": "assets/js/59.3bc7a605.js",
    "revision": "12ebcb5a9f5e5b51466a2aef177f9ab5"
  },
  {
    "url": "assets/js/6.b623a6e8.js",
    "revision": "e65124a8e1e6081bd8b93a859db7e396"
  },
  {
    "url": "assets/js/60.19a01a7f.js",
    "revision": "5fda9877f73bfa428689808f92a90452"
  },
  {
    "url": "assets/js/61.6c4ee2c3.js",
    "revision": "24504d3ea85264f64b3bf03ac2df1aa1"
  },
  {
    "url": "assets/js/62.200dec61.js",
    "revision": "2aa75ad7e4d669ab647165817b996b60"
  },
  {
    "url": "assets/js/63.e48b655a.js",
    "revision": "1f9597ccb2563208583fe1d253e78482"
  },
  {
    "url": "assets/js/64.9fe95dbf.js",
    "revision": "fb93cf99cf3dd50cb2e70f8ad1a9ca85"
  },
  {
    "url": "assets/js/65.5b68f721.js",
    "revision": "160c89aa34941eb9454e8555416fc9f4"
  },
  {
    "url": "assets/js/66.ae6e4d7a.js",
    "revision": "c55a01adda594ed5679f9d9720e15e59"
  },
  {
    "url": "assets/js/67.407219a5.js",
    "revision": "7a2f4b4ad006b2053e20708b6efd88fd"
  },
  {
    "url": "assets/js/68.77ca8a58.js",
    "revision": "9c7cb2e13d90c65dddbce1bd57dbc008"
  },
  {
    "url": "assets/js/69.bf024be6.js",
    "revision": "a2db2dd8453a622e3ca6ed660f679517"
  },
  {
    "url": "assets/js/7.0899b04d.js",
    "revision": "0bf783b89b2ef195538a6d665b470dc4"
  },
  {
    "url": "assets/js/70.3ec832de.js",
    "revision": "bda96034cc0ba439814509b5bebb82e6"
  },
  {
    "url": "assets/js/71.9b2f3d21.js",
    "revision": "fa9ab5a81331469e88b42df6a95f580a"
  },
  {
    "url": "assets/js/app.6295a637.js",
    "revision": "bb0991484a24c5749695e21b8acabf6b"
  },
  {
    "url": "assets/js/vendors~docsearch.69f722f4.js",
    "revision": "58ab582f6a225859f3fc58ee1b060610"
  },
  {
    "url": "computer-science/2022-09-01-readme-emoji.html",
    "revision": "1caddbf325ce22acd0f156bdfde6a8de"
  },
  {
    "url": "computer-science/2022-11-21-dbms.html",
    "revision": "258ce0cc9ee8e0e1987b323534db9451"
  },
  {
    "url": "computer-science/2022-11-22-url-protocol-tcp-ip.html",
    "revision": "ee2227f1f8663dc52ea9ea9ab73290fd"
  },
  {
    "url": "computer-science/2022-11-22-web-service-processing.html",
    "revision": "88e20ad6a402f18b097c8c0e7f24537d"
  },
  {
    "url": "computer-science/2022-11-23-frontend-backend.html",
    "revision": "a800bbe117b716c80cc9e2801374339c"
  },
  {
    "url": "computer-science/2022-11-23-osi-7-layer.html",
    "revision": "ab1fc6b5e1ca27a33b025419fad4df43"
  },
  {
    "url": "computer-science/2022-11-24-msa.html",
    "revision": "e83bfb42b52b06975a83428831b330e7"
  },
  {
    "url": "computer-science/2022-11-24-mvc-pattern.html",
    "revision": "679607698358f7f4ea9be8a0955a664c"
  },
  {
    "url": "computer-science/2022-11-29-docker.html",
    "revision": "52a6b5d55a9dec983c5a3a45c001b329"
  },
  {
    "url": "computer-science/2022-11-30-http-method.html",
    "revision": "1842b97198c8124530ce88975118a3f4"
  },
  {
    "url": "computer-science/2022-12-02-cloud.html",
    "revision": "9d3b501da2f19dbce3f34dac21a2dbc4"
  },
  {
    "url": "computer-science/2022-12-05-git.html",
    "revision": "4e5618eb20b38f7b723aaabae16a1ba7"
  },
  {
    "url": "computer-science/2022-12-07-cookie-session.html",
    "revision": "3d928e7b4add5c88ffd6bdc7e0fb2c11"
  },
  {
    "url": "computer-science/2022-12-07-server-side-script.html",
    "revision": "351bfd26d107af7dfb9a3a9e3937f709"
  },
  {
    "url": "computer-science/2022-12-09-api.html",
    "revision": "8489c50aad3779bfce7844ddd464ca6f"
  },
  {
    "url": "computer-science/2022-12-22-web-standard.html",
    "revision": "d640e83ce4d0636a9a5e01046852a84d"
  },
  {
    "url": "favicons/android-icon-144x144.png",
    "revision": "b625de0a8900b8a75d4e2b7635c8f92a"
  },
  {
    "url": "favicons/android-icon-192x192.png",
    "revision": "ecd288bb499a40d1979dfe9a867f52ab"
  },
  {
    "url": "favicons/apple-icon.png",
    "revision": "5f51d88b0578f10bdc520f1c0aaf1130"
  },
  {
    "url": "favicons/favicon-16x16.png",
    "revision": "caf77039c89af8b8d5c83829b09260dc"
  },
  {
    "url": "favicons/favicon-32x32.png",
    "revision": "50b7059f0b5850d9d787004060b4f37e"
  },
  {
    "url": "favicons/ms-icon-150x150.png",
    "revision": "8bbe1cfca2b5fdde73e4b76c1a817804"
  },
  {
    "url": "gsap/2023-06-27-gsap-basic.html",
    "revision": "2f2422ec8d49cc4d071c250354ebf401"
  },
  {
    "url": "gsap/2024-03-14-gsap-advanced.html",
    "revision": "bf8a1de2a3c78ddab7fba45961f6d542"
  },
  {
    "url": "gsap/index.html",
    "revision": "460258570c037bb4c7d74a37437346df"
  },
  {
    "url": "html-css/2022-12-15-doctype.html",
    "revision": "03a4361fc25afacf3a5b606325069c9a"
  },
  {
    "url": "html-css/2023-01-16-cascading-system.html",
    "revision": "c4469d201f6b843c7a367de27045ea0d"
  },
  {
    "url": "html-css/2023-01-17-css-selector.html",
    "revision": "c1a0ff5aa3f31637fb8161ee0b7e71c7"
  },
  {
    "url": "html-css/2023-01-18-bfc-ifc.html",
    "revision": "b536f20229f6ef9d9a66dcbe75373980"
  },
  {
    "url": "html-css/2023-01-18-box-model.html",
    "revision": "e611a837ee2e6e52b86fafa1bcb4ce4f"
  },
  {
    "url": "html-css/2023-01-26-float.html",
    "revision": "4ee8ffb7c357577034766268f1b53c88"
  },
  {
    "url": "html-css/2023-01-26-z-index.html",
    "revision": "ae6c04ea8c13898a95ca6fd1591180ad"
  },
  {
    "url": "html-css/2023-01-31-reset-normalize.html",
    "revision": "ff89ae4910dc8b9f523436b671df9194"
  },
  {
    "url": "html-css/index.html",
    "revision": "339e7271a07374d4408746fee3915709"
  },
  {
    "url": "index.html",
    "revision": "3b41f9a1a1abc142131923a402ce821c"
  },
  {
    "url": "interview/interview-questions.html",
    "revision": "0a47cf0d74cdf1f1f47f7d921d2a128d"
  },
  {
    "url": "javascript/2021-webs-study-quiz.html",
    "revision": "522753253de0e8558536acd501d6e0da"
  },
  {
    "url": "javascript/2022-09-30-dream-coding-learn-js.html",
    "revision": "f1541aca580f31220f534df25a4e8206"
  },
  {
    "url": "javascript/2022-10-12-nomad-coder-chrome-app.html",
    "revision": "6563cf9f075dda3dd796cfa414077251"
  },
  {
    "url": "javascript/2022-12-02-ajax.html",
    "revision": "be31dbd2d6747603d0c70c4d920cba4c"
  },
  {
    "url": "javascript/2022-12-07-ternary-operator.html",
    "revision": "5f9273ba3e6ad86a724e4da6c440ca72"
  },
  {
    "url": "javascript/2022-12-08-json.html",
    "revision": "bc75d526d96df575f146bbd1884f6647"
  },
  {
    "url": "javascript/2022-12-09-closure-anonymous.html",
    "revision": "2299d5a9afde6eadb26e2a44913bf016"
  },
  {
    "url": "javascript/2022-12-20-element-attribute.html",
    "revision": "d4e650b03159ae877c995e9a7a0a8bb2"
  },
  {
    "url": "javascript/2022-12-22-window-dom-bom.html",
    "revision": "553532e74df3f60b1ca900af5d635b84"
  },
  {
    "url": "javascript/2022-webs-study-quiz.html",
    "revision": "3ee5a763379617b9934c2bf8ad76f2f1"
  },
  {
    "url": "javascript/index.html",
    "revision": "0b88d0bbf14bd20d58d385e62fc99244"
  },
  {
    "url": "php-laravel/2022-12-03-how-to-start-laravel-project.html",
    "revision": "422baaac16947d8cc7662b7177113c8b"
  },
  {
    "url": "php-laravel/index.html",
    "revision": "3f753fdbef680702165acdfdc20faf77"
  },
  {
    "url": "react/2022-09-17-how-to-start-react-project.html",
    "revision": "c29b7bfe11b7f7705948f5237d4f7bc3"
  },
  {
    "url": "react/index.html",
    "revision": "8365944bd3a3f9c72167b214578bc1ff"
  },
  {
    "url": "vue-nuxt/2024-03-04-coding-apple.html",
    "revision": "d4b1e2a6e7575e385fa718880dc151ee"
  },
  {
    "url": "vue-nuxt/index.html",
    "revision": "5ba7f66c0c50800c102e37fcf48b172f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
