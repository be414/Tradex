// تحديد العنصر <nav>
const navbar = document.querySelector("nav");

// الاستماع لحدث التمرير
window.addEventListener("scroll", () => {
  // الحصول على المسافة المقطوعة أثناء التمرير
  const scrollPosition = window.scrollY;

  // إذا كانت المسافة أكبر من 0، أضف class "fixed"، وإلا أزلها
  if (scrollPosition > navbar.offsetTop) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
});

document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".counter");
    const speed = 200; // كلما قل الرقم زادت سرعة العد

    const startCounting = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute("data-target");
                const count = +counter.innerText;
                const increment = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + increment);
                    setTimeout(updateCount, 30);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounting();
                observer.disconnect(); // يوقف المراقبة بعد تشغيل العداد
            }
        });
    }, { threshold: 0.5 });

    observer.observe(document.querySelector(".stats"));
});

// اختار جميع روابط الفلاتر
const links = document.querySelectorAll('.filter-btn a');
const cards = document.querySelectorAll('.card-filter');

// أضف حدث النقر على كل رابط
links.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // لمنع التصرف الافتراضي للرابط (الانتقال إلى مكان آخر)
    
    // إزالة الكلاس "active" من جميع الروابط
    links.forEach(link => link.classList.remove('active'));
    // إضافة الكلاس "active" للرابط الحالي
    this.classList.add('active');
    
    // الحصول على الفئة المختارة من data-filter
    const filter = this.getAttribute('data-filter');
    
    // تصفية البطاقات بناءً على الفئة المختارة
    filterItems(filter);
  });
});

// دالة لتصفية البطاقات
function filterItems(filter) {
  cards.forEach(card => {
    // الحصول على الفئات من data-category وتفصيلها إلى مصفوفة
    const categories = card.getAttribute('data-category').split(' ');

   
    if (filter === 'all' || categories.includes(filter)) {
      card.classList.add('active'); 
    } else {
      card.classList.remove('active'); 
    }
  });
}
