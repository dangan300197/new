let data = window.localStorage.getItem('test')
if (!data) {
    window.localStorage.setItem('test', '[]')
    data = []
} else {
    data = JSON.parse(data);

}

function signIn() {
    let username = $('.username').val()
    let password = $('.password').val()
    let login = document.querySelector('.login-wrap')
    let count = 0
    for (let i = 0; i < data.length; i++) {
        const element = data[i]
        if (username == element.usernamesignup && password == element.passwordsignup) {
            count++
            alert('dang nhap thanh cong')
            login.setAttribute('style', 'display: none;')
            document.querySelector('.home-page').setAttribute('style', 'display: block;')
            document.querySelector('body').setAttribute('style', `background-image: url('https://st.quantrimang.com/photos/image/2018/06/14/man-hinh-vo-1.jpg')`)
        }
    }
    if (count == 0) {

        alert('tai khoan khong ton tai,xin vui long dang ky')
    }


}

function AddAccount() {
    let usernamesignup = $('.usernamesignup').val()
    let passwordsignup = $('.passwordsignup').val()
    let repeatPass = $('.repeatPass').val()
    if (!usernamesignup || !passwordsignup) {
        return alert('khong duoc de trong username, password')
    } else if (passwordsignup.length < 8) {
        return alert('mat khau qua ngan')
    } else if (passwordsignup != repeatPass) {
        return alert('mat khau khong khop nhau')
    } else {
        alert('dang ky thanh cong')
    }


    let index = data.findIndex(function(value) { return value.usernamesignup === usernamesignup });

    if (index >= 0) return alert('username da ton tai');

    data.push({ usernamesignup, passwordsignup });
    window.localStorage.setItem('test', JSON.stringify(data));
}