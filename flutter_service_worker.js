'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "ad5530064d6d9093903095bc38cdbb92",
"assets/AssetManifest.json": "195f849322b6621058330e1d7c7515c5",
"assets/assets/fonts/orilla.ttf": "d560137074610c2ef4927d35e4b5b3a7",
"assets/assets/fonts/Raleway-Bold.ttf": "f49f3d2d9df5013c9bfaab7e3d39ee57",
"assets/assets/fonts/Raleway-Regular.ttf": "9942588a6c84f959132556d99e83ded6",
"assets/assets/imgs/cat1.png": "fc30ea00efdc26190566d8c597534940",
"assets/assets/imgs/cat1_1.png": "1130fbe4725e35295be8cafbdd4c6dd1",
"assets/assets/imgs/cat1_1_desc.png": "af25f104feacdcd6cd6d07b7555c2e9f",
"assets/assets/imgs/cat1_1_p1.png": "11dbbeb68c56caf5c41e522dada03dbc",
"assets/assets/imgs/cat1_1_p2.png": "24cf0ac740300170c39296da20c90d79",
"assets/assets/imgs/cat1_1_p3.png": "22841add7354514eb1e3101996159371",
"assets/assets/imgs/cat1_1_p4.png": "9ae37be0bfb535c9135007ac69329482",
"assets/assets/imgs/cat1_1_p5.png": "011dc5e379ee33de3ed3a5af1e346bfd",
"assets/assets/imgs/cat1_1_p6.png": "855b70cb3191abff9f9bbc83ac39a476",
"assets/assets/imgs/cat1_2.png": "bfbc77d74cb037769503d2595a82cf2f",
"assets/assets/imgs/cat1_2_desc.png": "3aedcb4139c6530cdac3ee5fab4e4844",
"assets/assets/imgs/cat1_2_p1.png": "a657f8e71ed23fa46bcb6ba36cf69d85",
"assets/assets/imgs/cat1_2_p2.png": "6663366f38537e3f736b9ff430d86d5c",
"assets/assets/imgs/cat1_2_p3.png": "cd3555e74412c533349687f0e9f18419",
"assets/assets/imgs/cat1_2_p4.png": "8eeaf87fbb6c988ed90ef8b3aa5d28bc",
"assets/assets/imgs/cat1_2_p5.png": "7c9de5a5f1f26d20e81ff7544473552a",
"assets/assets/imgs/cat1_3.png": "dbe8e00f92c71d904a3bde2f8e68bb4a",
"assets/assets/imgs/cat1_3_desc.png": "dbe8e00f92c71d904a3bde2f8e68bb4a",
"assets/assets/imgs/cat1_3_p1.png": "e6cdf62f5ea0f11e5a6898d8a12f6b6e",
"assets/assets/imgs/cat1_3_p2.png": "23856df91e3344058d154a27c77efbb1",
"assets/assets/imgs/cat1_3_p3.png": "fa52ebd8130a65cde35f87f9ec23393d",
"assets/assets/imgs/cat1_3_p4.png": "559067561684d7de1956e28bac214827",
"assets/assets/imgs/cat1_4.png": "f8426a974f8e451be865cc8a7f13e86d",
"assets/assets/imgs/cat1_42.png": "f8426a974f8e451be865cc8a7f13e86d",
"assets/assets/imgs/cat1_42_desc.png": "f8426a974f8e451be865cc8a7f13e86d",
"assets/assets/imgs/cat1_4_desc.png": "5ef1b1806f862bcbab6b477105e00b05",
"assets/assets/imgs/cat1_4_p1.png": "34c64615533e1a025f7609f7c18a395f",
"assets/assets/imgs/cat1_4_p2.png": "7de7b65e9433fb34c70013ef01674ddd",
"assets/assets/imgs/cat1_4_p3.png": "c7ea0237ea66c568a0b8a8d5334609b4",
"assets/assets/imgs/cat1_5.png": "a05ca5fcfb78dd3826bf8271e06cbe0f",
"assets/assets/imgs/cat1_5_desc.png": "91595516d14252ede5f73f919efc9152",
"assets/assets/imgs/cat1_5_p1.png": "05a66b73dd3e5a3d0411eabcedf93a2f",
"assets/assets/imgs/cat1_5_p2.png": "9f87a745fbefde631479e63ce1fd4c8f",
"assets/assets/imgs/cat1_5_p3.png": "bb5b372d0991f8ceaf467d5c8a77dafb",
"assets/assets/imgs/cat1_6.png": "4ca0c35f69d0ebda785b067e5a5a36d3",
"assets/assets/imgs/cat1_62.png": "4ca0c35f69d0ebda785b067e5a5a36d3",
"assets/assets/imgs/cat1_62_desc.png": "4ca0c35f69d0ebda785b067e5a5a36d3",
"assets/assets/imgs/cat1_6_desc.png": "da8f7b9911da28298e72c2bddebd4379",
"assets/assets/imgs/cat1_6_p1.png": "aec556d8ee41ca99891572e9fdf69b02",
"assets/assets/imgs/cat1_6_p2.png": "cef29c1f5ec090175dfdbc0850bae493",
"assets/assets/imgs/cat1_8.png": "159984401daad5188d0b8f7db818a52c",
"assets/assets/imgs/cat1_82.png": "159984401daad5188d0b8f7db818a52c",
"assets/assets/imgs/cat1_82_desc.png": "159984401daad5188d0b8f7db818a52c",
"assets/assets/imgs/cat1_8_desc.png": "8c2fbe243c66b869340b0f33b757af08",
"assets/assets/imgs/cat1_9.png": "79142f10f2c5b884f95d2eaa5c9f5190",
"assets/assets/imgs/cat1_92.png": "79142f10f2c5b884f95d2eaa5c9f5190",
"assets/assets/imgs/cat1_92_desc.png": "79142f10f2c5b884f95d2eaa5c9f5190",
"assets/assets/imgs/cat1_9_desc.png": "bf206e9ed1e1ceb0a73056b5fc432d37",
"assets/assets/imgs/cat2.png": "22ae263234d28dc2240ffb18db148b62",
"assets/assets/imgs/cat2_1.png": "b074e379a01cc89ce7090201078c5c83",
"assets/assets/imgs/cat2_12.png": "b074e379a01cc89ce7090201078c5c83",
"assets/assets/imgs/cat2_12_desc.png": "b074e379a01cc89ce7090201078c5c83",
"assets/assets/imgs/cat2_13.png": "b074e379a01cc89ce7090201078c5c83",
"assets/assets/imgs/cat2_13_desc.png": "b074e379a01cc89ce7090201078c5c83",
"assets/assets/imgs/cat2_14.png": "b074e379a01cc89ce7090201078c5c83",
"assets/assets/imgs/cat2_14_desc.png": "b074e379a01cc89ce7090201078c5c83",
"assets/assets/imgs/cat2_15.png": "b074e379a01cc89ce7090201078c5c83",
"assets/assets/imgs/cat2_15_desc.png": "b074e379a01cc89ce7090201078c5c83",
"assets/assets/imgs/cat2_16.png": "b074e379a01cc89ce7090201078c5c83",
"assets/assets/imgs/cat2_16_desc.png": "b074e379a01cc89ce7090201078c5c83",
"assets/assets/imgs/cat2_17.png": "b074e379a01cc89ce7090201078c5c83",
"assets/assets/imgs/cat2_17_desc.png": "b074e379a01cc89ce7090201078c5c83",
"assets/assets/imgs/cat2_1_desc.png": "ce4914319cafb7f43a174612af294bf5",
"assets/assets/imgs/cat2_2.png": "fd972f2dff0df48702c891c208d73f05",
"assets/assets/imgs/cat2_2_desc.png": "fd972f2dff0df48702c891c208d73f05",
"assets/assets/imgs/cat2_3.png": "c57a5e0547e64a4bf5829157f27bf59e",
"assets/assets/imgs/cat2_3_desc.png": "c57a5e0547e64a4bf5829157f27bf59e",
"assets/assets/imgs/cat2_4.png": "df861af4f13442bc99f9e0078d8d2440",
"assets/assets/imgs/cat2_4_desc.png": "df861af4f13442bc99f9e0078d8d2440",
"assets/assets/imgs/cat2_5.png": "a3599ae659a18857f4a6b6cffa6f94e4",
"assets/assets/imgs/cat2_5_desc.png": "a3599ae659a18857f4a6b6cffa6f94e4",
"assets/assets/imgs/cat3.png": "d4cebc46ad3435c344ffb063eda5da66",
"assets/assets/imgs/cat3_1.png": "b218082eb6ddc477b81fe2077fff1d81",
"assets/assets/imgs/cat3_12.png": "b218082eb6ddc477b81fe2077fff1d81",
"assets/assets/imgs/cat3_12_desc.png": "b218082eb6ddc477b81fe2077fff1d81",
"assets/assets/imgs/cat3_1_desc.png": "299118dbc996db11ca27aeb321c462a5",
"assets/assets/imgs/cat3_2.png": "270083704ae4b20e5cd8961a2ae662c7",
"assets/assets/imgs/cat3_2_desc.png": "270083704ae4b20e5cd8961a2ae662c7",
"assets/assets/imgs/cat3_3.png": "e21f2b1e6f5d06a701b68c21d9ef04e0",
"assets/assets/imgs/cat3_3_desc.png": "4ea967e9b562bba7fec04634336ca619",
"assets/assets/imgs/cat3_4.png": "a1c8bc67b99d8124af2f3ab9dd6b27ca",
"assets/assets/imgs/cat3_42.png": "a1c8bc67b99d8124af2f3ab9dd6b27ca",
"assets/assets/imgs/cat3_42_desc.png": "a1c8bc67b99d8124af2f3ab9dd6b27ca",
"assets/assets/imgs/cat3_4_desc.png": "e5b0069fb6d26365cf189729faca216c",
"assets/assets/imgs/cat3_5.jpg": "a153f63ff159eef10f912987449735e7",
"assets/assets/imgs/cat3_5.png": "288a659fa378837cc836ab2821b82122",
"assets/assets/imgs/cat3_5_desc.png": "751cdfad5f201436eebe38bd027ab7ff",
"assets/assets/imgs/cat4.png": "e366cd758692108e486ac662df535f37",
"assets/assets/imgs/cat4_1.png": "327dae4f14d4b1d2ef8a205162f67a49",
"assets/assets/imgs/cat4_12.png": "327dae4f14d4b1d2ef8a205162f67a49",
"assets/assets/imgs/cat4_12_desc.png": "327dae4f14d4b1d2ef8a205162f67a49",
"assets/assets/imgs/cat4_13.png": "327dae4f14d4b1d2ef8a205162f67a49",
"assets/assets/imgs/cat4_13_desc.png": "327dae4f14d4b1d2ef8a205162f67a49",
"assets/assets/imgs/cat4_14.png": "327dae4f14d4b1d2ef8a205162f67a49",
"assets/assets/imgs/cat4_14_desc.png": "327dae4f14d4b1d2ef8a205162f67a49",
"assets/assets/imgs/cat4_1_desc.png": "42a856699c571214a18abf47045aee5a",
"assets/assets/imgs/cat4_2.png": "c593f6acbead98d419e6869739dacc3a",
"assets/assets/imgs/cat4_2_desc.png": "c593f6acbead98d419e6869739dacc3a",
"assets/assets/imgs/cat4_3.png": "81606fb61c6555d3ec936ce8307fa858",
"assets/assets/imgs/cat4_32.png": "81606fb61c6555d3ec936ce8307fa858",
"assets/assets/imgs/cat4_32_desc.png": "81606fb61c6555d3ec936ce8307fa858",
"assets/assets/imgs/cat4_3_desc.png": "a5ddd53f3e44b54a3749d3735546de87",
"assets/assets/imgs/cat4_4.png": "86c7000506c4891ce62f5970380a27f6",
"assets/assets/imgs/cat4_42.png": "86c7000506c4891ce62f5970380a27f6",
"assets/assets/imgs/cat4_42_desc.png": "86c7000506c4891ce62f5970380a27f6",
"assets/assets/imgs/cat4_4_desc.png": "3b27a6490c42955117d583b19e04ec04",
"assets/assets/imgs/cat5.png": "5cfdf8a57eb565453eff9721a02ac7d2",
"assets/assets/imgs/cat5_1.png": "b45ef034b41436bf77b24a507c0ffd17",
"assets/assets/imgs/cat5_12.png": "b45ef034b41436bf77b24a507c0ffd17",
"assets/assets/imgs/cat5_12_desc.png": "b45ef034b41436bf77b24a507c0ffd17",
"assets/assets/imgs/cat5_13.png": "b45ef034b41436bf77b24a507c0ffd17",
"assets/assets/imgs/cat5_13_desc.png": "b45ef034b41436bf77b24a507c0ffd17",
"assets/assets/imgs/cat5_1_desc.png": "750893bc9524c79f640c0c228488c6b1",
"assets/assets/imgs/cat5_2.png": "d2e666248210e306783c72fa9dc13577",
"assets/assets/imgs/cat5_2_desc.png": "e556994957251d04530d3050e12edada",
"assets/assets/imgs/cat5_3.png": "3234701f8928f69d455500d7a75e1238",
"assets/assets/imgs/cat5_3_desc.png": "4b417e1e49c3481f84013e5824ece462",
"assets/assets/imgs/cat5_4.png": "02d56b315905aea7cc8d9f052807c0ec",
"assets/assets/imgs/cat5_4_desc.png": "b075a6f1e1ee478a7c68020dc49cde88",
"assets/assets/imgs/cat5_5.png": "5de605d94a3f8714297f3eab31d7d701",
"assets/assets/imgs/cat5_5_desc.png": "33f3b2008e4dfd31ef78d7b825be08e7",
"assets/assets/imgs/cat5_6.png": "3234701f8928f69d455500d7a75e1238",
"assets/assets/imgs/cat5_6_desc.png": "3234701f8928f69d455500d7a75e1238",
"assets/assets/imgs/cat5_7.png": "419dc46ffb4bbba0e7e9f5ba306b44d4",
"assets/assets/imgs/cat5_72.png": "419dc46ffb4bbba0e7e9f5ba306b44d4",
"assets/assets/imgs/cat5_72_desc.png": "419dc46ffb4bbba0e7e9f5ba306b44d4",
"assets/assets/imgs/cat5_7_desc.png": "419dc46ffb4bbba0e7e9f5ba306b44d4",
"assets/assets/imgs/cat5_8.png": "a573f7309e42532bb3803174806c1590",
"assets/assets/imgs/cat5_82.png": "a573f7309e42532bb3803174806c1590",
"assets/assets/imgs/cat5_82_desc.png": "a573f7309e42532bb3803174806c1590",
"assets/assets/imgs/cat5_8_desc.png": "a573f7309e42532bb3803174806c1590",
"assets/assets/imgs/cat6.png": "ebf9d8cea9c8c90d4e8fab288cbb47a9",
"assets/assets/imgs/cat6_1.png": "86ff793c3ed405849656a00a085ffce9",
"assets/assets/imgs/cat6_1_desc.png": "86ff793c3ed405849656a00a085ffce9",
"assets/assets/imgs/cat6_2.png": "531b46c1dc5cf067bef350c4aaece37a",
"assets/assets/imgs/cat6_2_desc.png": "531b46c1dc5cf067bef350c4aaece37a",
"assets/assets/imgs/cat6_3.png": "5d340c7e19239935f0b5d5d32e9a06a7",
"assets/assets/imgs/cat6_3_desc.png": "5d340c7e19239935f0b5d5d32e9a06a7",
"assets/assets/imgs/cat6_4.png": "ebf9d8cea9c8c90d4e8fab288cbb47a9",
"assets/assets/imgs/cat6_4_desc.png": "ebf9d8cea9c8c90d4e8fab288cbb47a9",
"assets/assets/imgs/cat_57.png": "419dc46ffb4bbba0e7e9f5ba306b44d4",
"assets/assets/imgs/cat_57_desc.png": "419dc46ffb4bbba0e7e9f5ba306b44d4",
"assets/assets/imgs/deliciousicon.ico": "4bd3d50e2c90fa36b3c20acd059138bf",
"assets/assets/imgs/destination_pin.png": "4f797cf6fa29a6638cc0706c7342a4b2",
"assets/assets/imgs/destination_pin_android.png": "2629d745ac4f8a6cda5ec5de6e140e1e",
"assets/assets/imgs/destination_pin_cat1.png": "a2406d00f6df623000ea9489433e356a",
"assets/assets/imgs/destination_pin_cat1_android.png": "2629d745ac4f8a6cda5ec5de6e140e1e",
"assets/assets/imgs/destination_pin_cat1_ios.png": "a2406d00f6df623000ea9489433e356a",
"assets/assets/imgs/destination_pin_cat2.png": "07824603b6766316ec049501da1cac78",
"assets/assets/imgs/destination_pin_cat2_android.png": "51c723e515e8887d2e50f7c5100c6051",
"assets/assets/imgs/destination_pin_cat2_ios.png": "07824603b6766316ec049501da1cac78",
"assets/assets/imgs/destination_pin_cat3.png": "a646d2b8bc683e5bf0ace2d0fb5134ec",
"assets/assets/imgs/destination_pin_cat3_android.png": "4ddeec1023acd188bf7e1c266ef63490",
"assets/assets/imgs/destination_pin_cat3_ios.png": "a646d2b8bc683e5bf0ace2d0fb5134ec",
"assets/assets/imgs/destination_pin_cat4.png": "d0e51da2a13331e6daab2ab47244c28f",
"assets/assets/imgs/destination_pin_cat4_android.png": "ad47344df9d0d1a5cd5a58ddf6ac19bf",
"assets/assets/imgs/destination_pin_cat4_ios.png": "d0e51da2a13331e6daab2ab47244c28f",
"assets/assets/imgs/destination_pin_cat5.png": "ac88f73cc95505a5be4af414c3fa51d1",
"assets/assets/imgs/destination_pin_cat5_android.png": "31445e2485d17d18196053e62640f46f",
"assets/assets/imgs/destination_pin_cat5_ios.png": "ac88f73cc95505a5be4af414c3fa51d1",
"assets/assets/imgs/destination_pin_cat6.png": "ae686a7e79504317a19730b9066ef539",
"assets/assets/imgs/destination_pin_cat6_android.png": "c02c06195fbb346518978fdcc1f76987",
"assets/assets/imgs/destination_pin_cat6_ios.png": "ae686a7e79504317a19730b9066ef539",
"assets/assets/imgs/destination_pin_ios.png": "4f797cf6fa29a6638cc0706c7342a4b2",
"assets/assets/imgs/farmer.jpeg": "e217c1015784c8d49dd7a899a2d56c15",
"assets/assets/imgs/img.png": "2117a77336a97d5f82e553193d4572a7",
"assets/assets/imgs/img_1.png": "2117a77336a97d5f82e553193d4572a7",
"assets/assets/imgs/img_2.png": "2117a77336a97d5f82e553193d4572a7",
"assets/assets/imgs/img_3.png": "a208ac066547b8d6b9d04918fd2c24ef",
"assets/assets/imgs/img_4.png": "73cd330daf694216e8e3c18e4e1aa5c2",
"assets/assets/imgs/img_5.png": "73cd330daf694216e8e3c18e4e1aa5c2",
"assets/assets/imgs/img_6.png": "5c57c2aae8db76217206101ed6cb640a",
"assets/assets/imgs/me.jpg": "eb6e99002933754f346fd320892876c1",
"assets/assets/imgs/of_main_bg.png": "9b34d679b0f79e8f81f4d5e8e8cf78a8",
"assets/assets/imgs/onboard1.png": "1417ac7c4f242051031841928e8798b4",
"assets/assets/imgs/onboard2.png": "6420b773bdde1b8c001e59756b9d3c08",
"assets/assets/imgs/onboard3.png": "8ffabf41f13412863185e87259715b59",
"assets/assets/imgs/source_pin.png": "8b7bbb17e2f3eb3546517a399cc1e615",
"assets/assets/imgs/source_pin_android.png": "65b8cc50e4ae364fe3117fcf1cb5031d",
"assets/assets/imgs/source_pin_ios.png": "8b7bbb17e2f3eb3546517a399cc1e615",
"assets/assets/imgs/thankyouimage.png": "061847cb1a7c1aa6db66e8f69a4e2bc0",
"assets/FontManifest.json": "535ddcf5a87e2634abbce5bcdfe53965",
"assets/fonts/MaterialIcons-Regular.otf": "d17f54dc07e9d235b51b227e59b21abc",
"assets/NOTICES": "f2b6236d2a6d09b7bc26ef3dcbf10f29",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "fecf20b4e00b129951d83da4140fe5f5",
"/": "fecf20b4e00b129951d83da4140fe5f5",
"main.dart.js": "6782a45830a18935be0ce5e3567f1003",
"manifest.json": "a793580036564a5b5a476d8112a0a436",
"version.json": "01290cc10844103d7ab43ae0b969e848"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
