/**(c) 2011 Enginimation Studio (http://enginimation.com). May be freely distributed under the MIT license.*/
(function(){
    "use strict";
    //reference to the global object
    var root = this;
    var transliteration;
    //we are on the server
    if(typeof exports !== 'undefined'){
        transliteration = exports;
    }
    //we are in browser
    else{
        transliteration = root.transliteration = {};
    }

    var mapping= {
        'А':'A',
        'а':'a',
        'Б':'B',
        'б':'b',
        'В':'V',
        'в':'v',
        'Г':'G', // russian
        'г':'g', // russian
        'Ґ':'G',
        'ґ':'g',
        'Д':'D',
        'д':'d',
        'Е':'E',
        'е':'e',
        'Ё':'E',
        'ё':'e',
        'Є':'Ye',//just on the word beginning
        'є':'ie',
        'Ж':'Zh',
        'ж':'zh',
        'З':'Z',
        'з':'z',
        'И':'Y',
        'и':'y',
        'І':'I',
        'і':'i',
        'Ї':'Yi',//just on the word beginning
        'ї':'i',
        'Й':'Y',//just on the word beginning
        'й':'i',
        'К':'K',
        'к':'k',
        'Л':'L',
        'л':'l',
        'М':'M',
        'м':'m',
        'Н':'N',
        'н':'n',
        'О':'O',
        'о':'o',
        'П':'P',
        'п':'p',
        'Р':'R',
        'р':'r',
        'С':'S',
        'с':'s',
        'Т':'T',
        'т':'t',
        'У':'U',
        'у':'u',
        'Ф':'F',
        'ф':'f',
        'Х':'Kh',
        'х':'kh',
        'Ц':'Ts',
        'ц':'ts',
        'Ч':'Ch',
        'ч':'ch',
        'Ш':'Sh',
        'ш':'sh',
        'Щ':'Shch',
        'щ':'shch',
        'Ы':'Y',
        'ы':'y',
        'Э':'E',
        'э':'e',
        'Ю':'Yu',//just on the word beginning
        'ю':'iu',
        'Я':'Ya',//just on the word beginning
        'я':'ia',
        'Ь':'',//not transliterated
        'ь':'',//not transliterated
        'Ъ':'',//not transliterated
        'ъ':'',//not transliterated
        "'":''//not transliterated
    };
    var ZghRegExp = new RegExp('Зг','g'),
        zghRegExp = new RegExp('зг','g');

    // Function which transliterates rusian and ukrainian word as cyrillic to latin.
    transliteration.transliterate = function(word){
        var i = 0,
            transliterated = '';
        if(word){
            //applying зг-zgh rule
            word = word.replace(ZghRegExp,'Zgh');
            word = word.replace(zghRegExp,'zgh');
            for(; i < word.length; i++){
                var character = word[i],
                    latinCharacter = mapping[character];
                if(latinCharacter || '' === latinCharacter){
                    transliterated += mapping[character];
                }
                else{
                    transliterated += character;
                }
            }
        }
        return transliterated;
    };

}).call(this);

