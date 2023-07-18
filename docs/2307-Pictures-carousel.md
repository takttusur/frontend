# Pictures carousel
Как клуб мы хотим показывать на главной странице подборку лучших фотографий
Для привлечения внимания как к клубу, так и к ресурсам клуба(сайт, группа в VK, Instagram страница)

## Acceptance criteria

1. Список URL фотографий для ротации берется из файла ./carousel-pictures.txt 
   1. Файл располагается на веб-сервере
   2. На каждой строке написан URL к изображению
3. Если фотография меньше блока - она должна быть растянута
4. Если фотография больше блока, или после растяжения стала больше - она может быть обрезана
5. Переключение фотографий:
    1. Время показа одной фотографии 5 секунд
    2. Если пользователь наводит курсор мыши на фотографию - таймер останавливается
6. Поверх фотографий накладывается эффект виньетка(затемнение по краям) с помощь CSS

## Technical details

Пример файла carouser-pictures.txt
```text
https://sun9-78.userapi.com/impg/LjIeEz0ME5wW7IjXNinsEstnKlW1wWQfSyJ_uA/IaYGsj-CoZY.jpg?size=2560x1706&quality=95&sign=bdd53cb3634957565062b067d8a65faf&type=album
https://sun9-7.userapi.com/impg/6dKBxq7zUVxhfHUnLRUpVkYOkOF4kBUzZS7DFw/1yCRDnLJ6do.jpg?size=2560x1154&quality=95&sign=1db234acf9bb831d9026e96b6fb98341&type=album
```