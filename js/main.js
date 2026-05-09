/* ============================================
   রংপুর সেবা (Rangpur Seba) - Main JavaScript
   ============================================ */

(function() {
    'use strict';

    // ===== CONFIGURATION =====
    const CONFIG = {
        whatsappNumber: '8801700000000',
        facebookPage: 'RangpurSeba',
        phone: '01700-000000',
        email: 'info@rangpurseba.com',
        deliveryAreas: ['রংপুর সদর', 'হাজিরহাট', 'বেগমগঞ্জ', 'মধুপুর', 'পীরগাছা', 'তারাগঞ্জ', 'বদরগঞ্জ', 'কাউনিয়া', 'মিঠাপুকুর', 'গঙ্গাচড়া']
    };

    // ===== DOM ELEMENTS =====
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileOverlay = document.querySelector('.mobile-menu-overlay');
    const scrollTopBtn = document.querySelector('.scroll-top');
    const faqItems = document.querySelectorAll('.faq-item');
    const statNumbers = document.querySelectorAll('.stat-number');
    const categoryTabs = document.querySelectorAll('.category-tab');
    const countersAnimated = new Set();

    // ===== INITIALIZATION =====
    document.addEventListener('DOMContentLoaded', function() {
        initNavbar();
        initMobileMenu();
        initScrollToTop();
        initFAQ();
        initCounters();
        initCategoryTabs();
        initSmoothScroll();
        initSwiperSliders();
        initAOS();
        initLazyLoading();
        setCurrentYear();
    });

    // ===== NAVBAR =====
    function initNavbar() {
        if (!navbar) return;

        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }, { passive: true });

        // Check initial scroll position
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        }
    }

    // ===== MOBILE MENU =====
    function initMobileMenu() {
        if (!hamburger || !mobileMenu || !mobileOverlay) return;

        function toggleMenu() {
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            mobileOverlay.classList.toggle('active');
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
        }

        function closeMenu() {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
            mobileOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }

        hamburger.addEventListener('click', toggleMenu);
        mobileOverlay.addEventListener('click', closeMenu);

        // Close on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
                closeMenu();
            }
        });

        // Close on link click
        mobileMenu.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', closeMenu);
        });

        // Handle resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768 && mobileMenu.classList.contains('active')) {
                closeMenu();
            }
        });
    }

    // ===== SCROLL TO TOP =====
    function initScrollToTop() {
        if (!scrollTopBtn) return;

        window.addEventListener('scroll', function() {
            if (window.scrollY > 400) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        }, { passive: true });

        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ===== FAQ ACCORDION =====
    function initFAQ() {
        faqItems.forEach(function(item) {
            const question = item.querySelector('.faq-question');
            if (!question) return;

            question.addEventListener('click', function() {
                const isActive = item.classList.contains('active');

                // Close all
                faqItems.forEach(function(faq) {
                    faq.classList.remove('active');
                });

                // Open clicked if it was not active
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        });

        // Open first FAQ by default
        if (faqItems.length > 0) {
            faqItems[0].classList.add('active');
        }
    }

    // ===== ANIMATED COUNTERS =====
    function initCounters() {
        if (statNumbers.length === 0) return;

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    if (countersAnimated.has(target)) return;
                    countersAnimated.add(target);

                    const targetValue = parseInt(target.getAttribute('data-target')) || 0;
                    const duration = 2000;
                    const startTime = performance.now();

                    function animateCounter(currentTime) {
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);

                        // Ease out cubic
                        const eased = 1 - Math.pow(1 - progress, 3);
                        const current = Math.floor(eased * targetValue);

                        target.textContent = current.toLocaleString('bn');

                        if (progress < 1) {
                            requestAnimationFrame(animateCounter);
                        } else {
                            target.textContent = targetValue.toLocaleString('bn');
                        }
                    }

                    requestAnimationFrame(animateCounter);
                    observer.unobserve(target);
                }
            });
        }, { threshold: 0.3 });

        statNumbers.forEach(function(stat) {
            observer.observe(stat);
        });
    }

    // ===== CATEGORY TABS =====
    function initCategoryTabs() {
        categoryTabs.forEach(function(tab) {
            tab.addEventListener('click', function() {
                categoryTabs.forEach(function(t) { t.classList.remove('active'); });
                this.classList.add('active');

                const category = this.getAttribute('data-category');
                if (!category) return;

                const products = document.querySelectorAll('.product-card');
                products.forEach(function(product) {
                    if (category === 'all' || product.getAttribute('data-category') === category) {
                        product.style.display = 'block';
                    } else {
                        product.style.display = 'none';
                    }
                });
            });
        });
    }

    // ===== SMOOTH SCROLL =====
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#') return;

                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    const offset = 80;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // ===== SWIPER SLIDERS =====
    function initSwiperSliders() {
        // Testimonial slider
        const testimonialSwiperEl = document.querySelector('.testimonial-slider');
        if (testimonialSwiperEl && typeof Swiper !== 'undefined') {
            new Swiper(testimonialSwiperEl, {
                slidesPerView: 1,
                spaceBetween: 24,
                loop: true,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                breakpoints: {
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                }
            });
        }

        // Partner testimonials slider
        const partnerSwiperEl = document.querySelector('.partner-testimonial-slider');
        if (partnerSwiperEl && typeof Swiper !== 'undefined') {
            new Swiper(partnerSwiperEl, {
                slidesPerView: 1,
                spaceBetween: 24,
                loop: true,
                autoplay: {
                    delay: 4000,
                    disableOnInteraction: false
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                breakpoints: {
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                }
            });
        }

        // Offer slider
        const offerSwiperEl = document.querySelector('.offer-slider');
        if (offerSwiperEl && typeof Swiper !== 'undefined') {
            new Swiper(offerSwiperEl, {
                slidesPerView: 1,
                spaceBetween: 24,
                loop: true,
                autoplay: {
                    delay: 4000,
                    disableOnInteraction: false
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                breakpoints: {
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 2 }
                }
            });
        }
    }

    // ===== AOS INITIALIZATION =====
    function initAOS() {
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 800,
                once: true,
                offset: 100,
                easing: 'ease-out-cubic'
            });
        }
    }

    // ===== LAZY LOADING =====
    function initLazyLoading() {
        if ('loading' in HTMLImageElement.prototype) {
            document.querySelectorAll('img[loading="lazy"]').forEach(function(img) {
                img.src = img.getAttribute('data-src') || img.src;
            });
        } else {
            // Fallback for browsers that don't support lazy loading
            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        const src = img.getAttribute('data-src');
                        if (src) {
                            img.src = src;
                        }
                        observer.unobserve(img);
                    }
                });
            });

            document.querySelectorAll('img[loading="lazy"]').forEach(function(img) {
                observer.observe(img);
            });
        }
    }

    // ===== SET CURRENT YEAR =====
    function setCurrentYear() {
        const yearElements = document.querySelectorAll('.current-year');
        const year = new Date().getFullYear();
        yearElements.forEach(function(el) {
            el.textContent = year;
        });
    }

    // ===== WHATSAPP ORDER =====
    window.orderViaWhatsApp = function(message) {
        const text = message || 'আমি বাজারের লিস্ট পাঠাতে চাই।';
        const url = 'https://wa.me/' + CONFIG.whatsappNumber + '?text=' + encodeURIComponent(text);
        window.open(url, '_blank');
    };

    // ===== FACEBOOK ORDER =====
    window.orderViaFacebook = function() {
        window.open('https://m.me/' + CONFIG.facebookPage, '_blank');
    };

    // ===== COPY TEXT =====
    window.copyToClipboard = function(text) {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text).then(function() {
                showToast('Copied to clipboard!');
            });
        } else {
            // Fallback
            const textarea = document.createElement('textarea');
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            showToast('Copied to clipboard!');
        }
    };

    // ===== TOAST NOTIFICATION =====
    function showToast(message) {
        const existingToast = document.querySelector('.toast-notification');
        if (existingToast) {
            existingToast.remove();
        }

        const toast = document.createElement('div');
        toast.className = 'toast-notification';
        toast.innerHTML = '<i class="fas fa-check-circle"></i> ' + message;
        Object.assign(toast.style, {
            position: 'fixed',
            bottom: '100px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: '#0F172A',
            color: 'white',
            padding: '0.75rem 1.5rem',
            borderRadius: '12px',
            fontSize: '0.9375rem',
            fontFamily: "'Hind Siliguri', sans-serif",
            zIndex: '9999',
            boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            opacity: '0',
            transition: 'opacity 0.3s ease'
        });

        document.body.appendChild(toast);

        requestAnimationFrame(function() {
            toast.style.opacity = '1';
        });

        setTimeout(function() {
            toast.style.opacity = '0';
            setTimeout(function() { toast.remove(); }, 300);
        }, 2000);
    }

    // ===== COUNTDOWN TIMER =====
    window.initCountdown = function(elementId, targetDate) {
        const el = document.getElementById(elementId);
        if (!el) return;

        function updateCountdown() {
            const now = new Date().getTime();
            const distance = new Date(targetDate).getTime() - now;

            if (distance < 0) {
                el.innerHTML = '<span class="text-white">Offer ended</span>';
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            const html = `
                <div class="countdown">
                    <div class="countdown-item">
                        <div class="countdown-number">${String(days).padStart(2, '0')}</div>
                        <div class="countdown-label">দিন</div>
                    </div>
                    <div class="countdown-item">
                        <div class="countdown-number">${String(hours).padStart(2, '0')}</div>
                        <div class="countdown-label">ঘন্টা</div>
                    </div>
                    <div class="countdown-item">
                        <div class="countdown-number">${String(minutes).padStart(2, '0')}</div>
                        <div class="countdown-label">মিনিট</div>
                    </div>
                    <div class="countdown-item">
                        <div class="countdown-number">${String(seconds).padStart(2, '0')}</div>
                        <div class="countdown-label">সেকেন্ড</div>
                    </div>
                </div>
            `;

            el.innerHTML = html;
        }

        updateCountdown();
        setInterval(updateCountdown, 1000);
    };

    // ===== SKELETON LOADING =====
    window.showSkeleton = function(containerId, count) {
        const container = document.getElementById(containerId);
        if (!container) return;

        let skeletonHTML = '';
        for (let i = 0; i < (count || 4); i++) {
            skeletonHTML += `
                <div class="card p-4">
                    <div class="skeleton" style="height: 180px; margin-bottom: 1rem;"></div>
                    <div class="skeleton" style="height: 20px; width: 70%; margin-bottom: 0.5rem;"></div>
                    <div class="skeleton" style="height: 16px; width: 40%; margin-bottom: 1rem;"></div>
                    <div class="d-flex justify-content-between">
                        <div class="skeleton" style="height: 24px; width: 60px;"></div>
                        <div class="skeleton" style="height: 36px; width: 80px; border-radius: 9999px;"></div>
                    </div>
                </div>
            `;
        }

        container.innerHTML = skeletonHTML;
    };

    // ===== FORM SUBMISSION =====
    document.querySelectorAll('.contact-form').forEach(function(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = this.querySelector('button[type="submit"]');
            if (btn) {
                const originalText = btn.innerHTML;
                btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> পাঠানো হচ্ছে...';
                btn.disabled = true;

                setTimeout(function() {
                    btn.innerHTML = '<i class="fas fa-check-circle"></i> সফলভাবে পাঠানো হয়েছে!';
                    setTimeout(function() {
                        btn.innerHTML = originalText;
                        btn.disabled = false;
                    }, 2000);
                }, 1500);
            }
        });
    });

    // ===== SCROLL ANIMATIONS FOR FLOATING ELEMENTS =====
    document.querySelectorAll('.float-element').forEach(function(el, index) {
        el.style.animationDelay = (index * 2) + 's';
    });

})();
