const tg = window.Telegram.WebApp;
export function useTelegram() {
    const onClose = () =>{
        tg.close();
    }


    const onToggleButton = () =>{ //показывать специальную кнопку снизу - задумано ТГ
        if (tg.MainButton.isVisible){
            tg.MainButton.hide(); //скрываем кнопку
        }
        else {
            tg.MainButton.show(); //показываем кнопку
        }
    }
    return {
        onClose,
        onToggleButton,
        tg,
        user: tg.initDataUnsafe?.user,
        queryId: tg.initDataUnsafe.user.id,
        photo_url: tg.initDataUnsafe?.user.photo_url,
        first_name: tg.initDataUnsafe.user.first_name ,
    }
}