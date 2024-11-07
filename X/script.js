// يمكنك إضافة أي تفاعلات جافا سكريبت هنا
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("تم إرسال رسالتك بنجاح!");
    this.reset();
});
