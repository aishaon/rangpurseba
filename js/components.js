/* ============================================
   রংপুর সেবা - Reusable Component Loader
   ============================================ */

const COMPONENTS = {
    header: `
    <header class="navbar" id="navbar">
        <div class="container">
            <a href="index.html" class="navbar-brand">
                <div class="logo-icon">
                    <i class="fas fa-shopping-basket"></i>
                </div>
                <div>
                    <span style="color:var(--primary)">রংপুর</span> সেবা
                </div>
            </a>

            <ul class="nav-links" id="navLinks">
                <li><a href="index.html" class="active">হোম</a></li>
                <li><a href="market.html">বাজার</a></li>
                <li><a href="recipes.html">রেসিপি</a></li>
                <li><a href="khata.html">বাজার হিসাব</a></li>
                <li><a href="order-process.html">অর্ডার প্রক্রিয়া</a></li>
                <li><a href="contact.html">যোগাযোগ</a></li>
            </ul>

            <div class="nav-actions">
                <a href="https://m.me/RangpurSeba" target="_blank" class="btn btn-sm btn-messenger">
                    <i class="fab fa-facebook-messenger"></i>
                    <span>Messenger</span>
                </a>
                <a href="https://wa.me/8801700000000" target="_blank" class="btn btn-sm btn-whatsapp">
                    <i class="fab fa-whatsapp"></i>
                    <span>WhatsApp</span>
                </a>
                <button class="hamburger" id="hamburger" aria-label="Menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    </header>

    <div class="mobile-menu-overlay" id="mobileOverlay"></div>
    <div class="mobile-menu" id="mobileMenu">
        <a href="index.html">হোম</a>
        <a href="market.html">বাজার <span class="badge badge-primary" style="font-size:0.625rem;padding:0.125rem 0.5rem;">কার্ট</span></a>
        <a href="khata.html">বাজার হিসাব</a>
        <a href="group-order.html">গ্রুপ অর্ডার</a>
        <a href="orders.html">আমার অর্ডার</a>
        <a href="order-process.html">অর্ডার প্রক্রিয়া</a>
        <a href="delivery-partner.html">ডেলিভারি পার্টনার</a>
        <a href="rider.html">রাইডার প্যানেল</a>
        <a href="reviews.html">গ্রাহক রিভিউ</a>
        <a href="faq.html">সাধারণ প্রশ্ন</a>
        <a href="contact.html">যোগাযোগ</a>
        <a href="about.html">আমাদের সম্পর্কে</a>
        <a href="services.html">সেবাসমূহ</a>
        <div style="margin-top: 2rem; display: flex; flex-direction: column; gap: 0.75rem;">
            <a href="https://wa.me/8801700000000" target="_blank" class="btn btn-primary" style="width:100%;">
                <i class="fab fa-whatsapp"></i> WhatsApp এ অর্ডার করুন
            </a>
            <a href="https://m.me/RangpurSeba" target="_blank" class="btn btn-outline" style="width:100%; border-color:#0078FF; color:#0078FF;">
                <i class="fab fa-facebook-messenger"></i> Messenger এ অর্ডার করুন
            </a>
        </div>
    </div>
    `,

    footer: `
    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div>
                    <div class="navbar-brand" style="margin-bottom: 1rem;">
                        <div class="logo-icon">
                            <i class="fas fa-shopping-basket"></i>
                        </div>
                        <div>
                            <span style="color:var(--primary)">রংপুর</span> সেবা
                        </div>
                    </div>
                    <p style="color: rgba(255,255,255,0.6); font-size: 0.9375rem; line-height: 1.7; margin-bottom: 1.5rem;">
                        রংপুর সেবা আপনার বিশ্বস্ত অনলাইন বাজার। ফেসবুক বা হোয়াটসঅ্যাপে বাজারের লিস্ট পাঠান, আমরা বাজার করে পৌঁছে দিচ্ছি আপনার দরজায়।
                    </p>
                    <div class="footer-social">
                        <a href="https://facebook.com/RangpurSeba" target="_blank" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                        <a href="https://wa.me/8801700000000" target="_blank" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
                        <a href="https://m.me/RangpurSeba" target="_blank" aria-label="Messenger"><i class="fab fa-facebook-messenger"></i></a>
                        <a href="mailto:info@rangpurseba.com" aria-label="Email"><i class="fas fa-envelope"></i></a>
                    </div>
                </div>

                <div>
                    <h4 class="footer-title">দ্রুত লিংক</h4>
                    <ul class="footer-links">
                        <li><a href="market.html"><i class="fas fa-chevron-right" style="font-size:0.625rem;"></i> বাজার</a></li>
                        <li><a href="khata.html"><i class="fas fa-chevron-right" style="font-size:0.625rem;"></i> বাজার হিসাব</a></li>
                        <li><a href="group-order.html"><i class="fas fa-chevron-right" style="font-size:0.625rem;"></i> গ্রুপ অর্ডার</a></li>
                        <li><a href="orders.html"><i class="fas fa-chevron-right" style="font-size:0.625rem;"></i> আমার অর্ডার</a></li>
                        <li><a href="order-process.html"><i class="fas fa-chevron-right" style="font-size:0.625rem;"></i> অর্ডার প্রক্রিয়া</a></li>
                        <li><a href="delivery-partner.html"><i class="fas fa-chevron-right" style="font-size:0.625rem;"></i> ডেলিভারি পার্টনার</a></li>
                        <li><a href="rider.html"><i class="fas fa-chevron-right" style="font-size:0.625rem;"></i> রাইডার প্যানেল</a></li>
                        <li><a href="faq.html"><i class="fas fa-chevron-right" style="font-size:0.625rem;"></i> সাধারণ প্রশ্ন</a></li>
                    </ul>
                </div>

                <div>
                    <h4 class="footer-title">যোগাযোগ</h4>
                    <div class="footer-contact-item">
                        <div class="footer-contact-icon"><i class="fas fa-phone-alt"></i></div>
                        <div>
                            <div style="font-weight: 600; color: white;">ফোন</div>
                            <a href="tel:01700000000">01700-000000</a>
                        </div>
                    </div>
                    <div class="footer-contact-item">
                        <div class="footer-contact-icon"><i class="fas fa-envelope"></i></div>
                        <div>
                            <div style="font-weight: 600; color: white;">ইমেইল</div>
                            <a href="mailto:info@rangpurseba.com">info@rangpurseba.com</a>
                        </div>
                    </div>
                    <div class="footer-contact-item">
                        <div class="footer-contact-icon"><i class="fab fa-whatsapp"></i></div>
                        <div>
                            <div style="font-weight: 600; color: white;">WhatsApp</div>
                            <a href="https://wa.me/8801700000000">01700-000000</a>
                        </div>
                    </div>
                    <div class="footer-contact-item">
                        <div class="footer-contact-icon"><i class="fab fa-facebook-messenger"></i></div>
                        <div>
                            <div style="font-weight: 600; color: white;">Messenger</div>
                            <a href="https://m.me/RangpurSeba">RangpurSeba</a>
                        </div>
                    </div>
                </div>

                <div>
                    <h4 class="footer-title">ডেলিভারি এলাকা</h4>
                    <ul class="footer-links">
                        <li><a href="#"><i class="fas fa-map-marker-alt" style="color: var(--primary);"></i> রংপুর সদর</a></li>
                        <li><a href="#"><i class="fas fa-map-marker-alt" style="color: var(--primary);"></i> হাজিরহাট</a></li>
                        <li><a href="#"><i class="fas fa-map-marker-alt" style="color: var(--primary);"></i> বেগমগঞ্জ</a></li>
                        <li><a href="#"><i class="fas fa-map-marker-alt" style="color: var(--primary);"></i> মধুপুর</a></li>
                        <li><a href="#"><i class="fas fa-map-marker-alt" style="color: var(--primary);"></i> পীরগাছা</a></li>
                        <li><a href="#"><i class="fas fa-map-marker-alt" style="color: var(--primary);"></i> কাউনিয়া</a></li>
                    </ul>
                </div>
            </div>

            <div class="footer-bottom">
                <span>&copy; <span class="current-year">2026</span> রংপুর সেবা - সর্বস্বত্ব সংরক্ষিত</span>
                <div style="display: flex; gap: 1.5rem;">
                    <a href="privacy.html" style="color: rgba(255,255,255,0.6); font-size:0.875rem;">প্রাইভেসি পলিসি</a>
                    <a href="terms.html" style="color: rgba(255,255,255,0.6); font-size:0.875rem;">শর্তাবলী</a>
                    <a href="orders.html" style="color: rgba(255,255,255,0.4); font-size:0.75rem;">অর্ডার প্যানেল</a>
                </div>
            </div>
        </div>
    </footer>
    `,

    floatingButtons: `
    <a href="https://wa.me/8801700000000" target="_blank" class="floating-btn whatsapp" aria-label="WhatsApp">
        <i class="fab fa-whatsapp"></i>
    </a>
    <a href="https://m.me/RangpurSeba" target="_blank" class="floating-btn messenger" aria-label="Messenger">
        <i class="fab fa-facebook-messenger"></i>
    </a>
    <button class="floating-btn scroll-top" aria-label="Scroll to top">
        <i class="fas fa-arrow-up"></i>
    </button>
    `,

    stickyCTA: `
    <div class="sticky-mobile-cta">
        <a href="https://wa.me/8801700000000" target="_blank" class="btn btn-primary">
            <i class="fab fa-whatsapp"></i> WhatsApp
        </a>
        <a href="https://m.me/RangpurSeba" target="_blank" class="btn btn-secondary">
            <i class="fab fa-facebook-messenger"></i> Messenger
        </a>
    </div>
    `
};

function loadComponents() {
    // Insert header
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        headerPlaceholder.outerHTML = COMPONENTS.header;
    }

    // Insert footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.outerHTML = COMPONENTS.footer;
    }

    // Insert floating buttons
    const floatingPlaceholder = document.getElementById('floating-buttons');
    if (floatingPlaceholder) {
        floatingPlaceholder.outerHTML = COMPONENTS.floatingButtons;
    }

    // Insert sticky CTA
    const stickyCTA = document.getElementById('sticky-mobile-cta');
    if (stickyCTA) {
        stickyCTA.outerHTML = COMPONENTS.stickyCTA;
    }

    // Re-init components after insertion
    if (typeof initComponents === 'function') {
        initComponents();
    }
}

// Initialize components after DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadComponents);
} else {
    loadComponents();
}

function initComponents() {
    // Initialize navbar scroll effect
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }, { passive: true });
        if (window.scrollY > 50) navbar.classList.add('scrolled');
    }

    // Initialize hamburger menu
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileOverlay = document.querySelector('.mobile-menu-overlay');
    
    if (hamburger && mobileMenu && mobileOverlay) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            mobileOverlay.classList.toggle('active');
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
        });

        mobileOverlay.addEventListener('click', function() {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
            mobileOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });

        mobileMenu.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
                mobileOverlay.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // Initialize scroll to top
    const scrollTopBtn = document.querySelector('.scroll-top');
    if (scrollTopBtn) {
        window.addEventListener('scroll', function() {
            scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
        }, { passive: true });
        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}
