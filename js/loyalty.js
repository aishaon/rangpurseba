/* ============================================
   রংপুর সেবা (Rangpur Seba) - Loyalty System
   ============================================ */

(function() {
    'use strict';

    var STORAGE_KEY = 'rangpurseba_loyalty';

    function getData() {
        var raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return { totalPoints: 0, earned: 0, redeemed: 0, history: [] };
        try { return JSON.parse(raw); }
        catch(e) { return { totalPoints: 0, earned: 0, redeemed: 0, history: [] }; }
    }

    function saveData(d) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(d));
    }

    var TIERS = [
        { min: 0, max: 49, name: 'তামা', nameEn: 'Bronze', benefits: 'কোনো সুবিধা নেই', discount: 0, freeDelivery: false, priority: false },
        { min: 50, max: 149, name: 'রূপা', nameEn: 'Silver', benefits: '৫০০+ টাকার অর্ডারে ফ্রি ডেলিভারি', discount: 0, freeDelivery: true, priority: false },
        { min: 150, max: 299, name: 'সোনা', nameEn: 'Gold', benefits: '৫% ডিসকাউন্ট + ফ্রি ডেলিভারি', discount: 5, freeDelivery: true, priority: false },
        { min: 300, max: Infinity, name: 'প্লাটিনাম', nameEn: 'Platinum', benefits: '১০% ডিসকাউন্ট + ফ্রি ডেলিভারি + প্রাইওরিটি', discount: 10, freeDelivery: true, priority: true }
    ];

    function getTier(points) {
        for (var i = TIERS.length - 1; i >= 0; i--) {
            if (points >= TIERS[i].min) return TIERS[i];
        }
        return TIERS[0];
    }

    function getNextTier(points) {
        for (var i = 0; i < TIERS.length - 1; i++) {
            if (points >= TIERS[i].min && points < TIERS[i + 1].min) {
                return { tier: TIERS[i + 1], pointsNeeded: TIERS[i + 1].min - points };
            }
        }
        return null;
    }

    window.addLoyaltyPoints = function(amount) {
        var pts = Math.floor(amount / 100);
        if (pts <= 0) return 0;
        var d = getData();
        d.totalPoints += pts;
        d.earned += pts;
        d.history.push({ date: new Date().toISOString(), amount: amount, points: pts, type: 'earn' });
        saveData(d);
        return pts;
    };

    window.getLoyaltyPoints = function() {
        var d = getData();
        var tier = getTier(d.totalPoints);
        var next = getNextTier(d.totalPoints);
        return {
            points: d.totalPoints,
            earned: d.earned,
            redeemed: d.redeemed,
            tier: tier,
            tierName: tier.name,
            tierNameEn: tier.nameEn,
            benefits: tier.benefits,
            discount: tier.discount,
            freeDelivery: tier.freeDelivery,
            priority: tier.priority,
            nextTier: next ? next.tier.name : null,
            pointsToNext: next ? next.pointsNeeded : 0,
            history: d.history
        };
    };

    window.redeemPoints = function(points) {
        var d = getData();
        if (d.totalPoints < points) return 0;
        var discount = Math.floor(points / 10) * 5;
        d.totalPoints -= points;
        d.redeemed += points;
        d.history.push({ date: new Date().toISOString(), points: points, discount: discount, type: 'redeem' });
        saveData(d);
        return discount;
    };

    window.getLoyaltyBadgeHTML = function() {
        var info = window.getLoyaltyPoints();
        var nextHtml = info.nextTier
            ? '<div class="loyalty-next">পরবর্তী: ' + info.pointsToNext + ' পয়েন্ট ' + info.nextTier + ' টিয়ারে</div>'
            : '<div class="loyalty-next" style="color:var(--primary);">সর্বোচ্চ টিয়ার অর্জিত!</div>';
        return '<div class="loyalty-badge" style="display:inline-flex;align-items:center;gap:0.5rem;padding:0.5rem 1rem;border-radius:9999px;background:linear-gradient(135deg,#FEF3C7,#FDE68A);border:1px solid #F59E0B;font-family:var(--font-bn);">'
            + '<i class="fas fa-star" style="color:#F59E0B;font-size:1.125rem;"></i>'
            + '<div>'
            + '<div style="font-weight:700;font-size:0.875rem;color:#92400E;">' + info.tierName + ' (' + info.tierNameEn + ')</div>'
            + '<div style="font-size:0.75rem;color:#B45309;">' + info.points + ' পয়েন্ট</div>'
            + '</div></div>';
    };

})();
