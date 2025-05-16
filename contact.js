document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // منع الإرسال الفوري للنموذج

    let email = document.getElementById('email').value;
    let subject = document.getElementById('subject').value;
    let errorMessage = "";

    // التحقق من صحة البريد الإلكتروني
    if (!validateEmail(email)) {
        errorMessage += "The e-mail address entered is invalid.<br>";
    }

    // التحقق من صحة الموضوع
    if (subject.trim() === "") {
        errorMessage += "One or more fields have an error. Please check and try again.<br>";
    }

    // عرض الرسالة في حال وجود أخطاء
    if (errorMessage !== "") {
        document.getElementById('error-message').innerHTML = errorMessage;
    } else {
        // هنا يمكن إضافة كود إرسال النموذج إذا كانت المدخلات صحيحة
        document.getElementById('error-message').innerHTML = "Message sent successfully!";
    }
});

function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}
