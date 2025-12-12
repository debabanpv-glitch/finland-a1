// ============================
// Finnish A1 Learning Website
// Shared JavaScript for all pages
// ============================

// ============================
// Supabase Configuration
// ============================
const SUPABASE_URL = 'https://vfrgdhcltkgxurbalora.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZmcmdkaGNsdGtneHVyYmFsb3JhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU1MTg1NDYsImV4cCI6MjA4MTA5NDU0Nn0.a0OmbOCQOouJoKMS7t0dPT8TrrwMT6cBgj3BFv7stYI';

// User Account System (fixed accounts - no registration)
const userAccount = {
    // Fixed accounts (username: password)
    ACCOUNTS: {
        'Ban1': 'ban@123@123',
        'Ban2': 'ban@123@123'
    },

    getCurrentUser() {
        return localStorage.getItem('currentUser') || null;
    },

    // Get list of usernames
    getUsernames() {
        return Object.keys(this.ACCOUNTS);
    },

    // Login
    login(username, password) {
        // Check if account exists
        if (!this.ACCOUNTS[username]) {
            return { success: false, message: 'Tài khoản không tồn tại!' };
        }
        // Check password
        if (this.ACCOUNTS[username] !== password) {
            return { success: false, message: 'Sai mật khẩu!' };
        }
        localStorage.setItem('currentUser', username);
        window.location.reload();
        return { success: true };
    },

    // Logout
    logout() {
        localStorage.removeItem('currentUser');
        window.location.reload();
    }
};
window.userAccount = userAccount;

// Simple Supabase Storage client
const supabaseStorage = {
    // Get user ID based on current user name
    getUserId() {
        const currentUser = userAccount.getCurrentUser();
        if (currentUser) {
            return 'user_' + currentUser.toLowerCase().replace(/\s+/g, '_');
        }
        // Fallback for anonymous
        let visitorId = localStorage.getItem('visitorId');
        if (!visitorId) {
            visitorId = 'anon_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
            localStorage.setItem('visitorId', visitorId);
        }
        return visitorId;
    },

    // Get progress key for current user
    getProgressKey(baseKey) {
        const user = userAccount.getCurrentUser();
        return user ? `${baseKey}_${user}` : baseKey;
    },

    // Upload audio blob to Supabase Storage
    async uploadRecording(cardId, blob) {
        const userId = this.getUserId();
        const fileName = `${userId}/${cardId}.webm`;

        try {
            const response = await fetch(`${SUPABASE_URL}/storage/v1/object/RECORDINGS/${fileName}`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
                    'apikey': SUPABASE_ANON_KEY,
                    'Content-Type': 'audio/webm',
                    'x-upsert': 'true' // Overwrite if exists
                },
                body: blob
            });

            if (response.ok) {
                console.log('Recording uploaded:', cardId);
                return true;
            } else {
                console.error('Upload failed:', await response.text());
                return false;
            }
        } catch (err) {
            console.error('Upload error:', err);
            return false;
        }
    },

    // Download audio from Supabase Storage
    async getRecording(cardId) {
        const userId = this.getUserId();
        const fileName = `${userId}/${cardId}.webm`;

        try {
            const response = await fetch(`${SUPABASE_URL}/storage/v1/object/public/RECORDINGS/${fileName}`, {
                headers: {
                    'apikey': SUPABASE_ANON_KEY
                }
            });

            if (response.ok) {
                const blob = await response.blob();
                return blob;
            }
            return null;
        } catch (err) {
            console.error('Download error:', err);
            return null;
        }
    },

    // Check if recording exists
    async hasRecording(cardId) {
        const userId = this.getUserId();
        const fileName = `${userId}/${cardId}.webm`;

        try {
            const response = await fetch(`${SUPABASE_URL}/storage/v1/object/public/RECORDINGS/${fileName}`, {
                method: 'HEAD',
                headers: {
                    'apikey': SUPABASE_ANON_KEY
                }
            });
            return response.ok;
        } catch {
            return false;
        }
    }
};

// Make available globally
window.supabaseStorage = supabaseStorage;

// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    initApp();
});

// Initialize Application
function initApp() {
    initSidebar();
    initDarkMode();
    initSmoothScroll();
    initBackToTop();
    loadSavedTheme();
}

// ============================
// Sidebar Navigation (Mobile)
// ============================
function initSidebar() {
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
            menuToggle.classList.toggle('active');
            if (overlay) overlay.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
    }

    // Close menu when clicking overlay
    if (overlay) {
        overlay.addEventListener('click', () => {
            if (sidebar) sidebar.classList.remove('active');
            if (menuToggle) menuToggle.classList.remove('active');
            overlay.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    }

    // Close menu when clicking a nav link (mobile)
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                if (sidebar) sidebar.classList.remove('active');
                if (menuToggle) menuToggle.classList.remove('active');
                if (overlay) overlay.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        });
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            if (sidebar) sidebar.classList.remove('active');
            if (menuToggle) menuToggle.classList.remove('active');
            if (overlay) overlay.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });
}

// ============================
// Dark Mode
// ============================
function initDarkMode() {
    const darkToggle = document.getElementById('darkToggle');

    if (darkToggle) {
        darkToggle.addEventListener('click', () => {
            toggleDarkMode();
        });
    }
}

function toggleDarkMode() {
    const body = document.body;
    const darkToggle = document.getElementById('darkToggle');

    body.classList.toggle('dark-mode');

    const isDark = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark);

    if (darkToggle) {
        darkToggle.textContent = isDark ? '☀️' : '🌙';
    }
}

function loadSavedTheme() {
    const savedDarkMode = localStorage.getItem('darkMode');
    const darkToggle = document.getElementById('darkToggle');

    if (savedDarkMode === 'true') {
        document.body.classList.add('dark-mode');
        if (darkToggle) {
            darkToggle.textContent = '☀️';
        }
    }
}

// ============================
// Text-to-Speech (Finnish)
// ============================
function speak(text, speed = 0.6) {
    if (!text) return;

    if ('speechSynthesis' in window) {
        // Cancel any ongoing speech
        speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'fi-FI';
        utterance.rate = speed; // 0.6 = chậm, dễ nghe hơn cho người học
        utterance.pitch = 1;
        utterance.volume = 1;

        // Try to find Finnish voice - prefer female voices (usually clearer)
        const voices = speechSynthesis.getVoices();
        let finnishVoice = voices.find(voice =>
            (voice.lang.startsWith('fi') || voice.lang === 'fi-FI') &&
            voice.name.toLowerCase().includes('female')
        );

        // Fallback to any Finnish voice
        if (!finnishVoice) {
            finnishVoice = voices.find(voice =>
                voice.lang.startsWith('fi') ||
                voice.lang === 'fi-FI'
            );
        }

        if (finnishVoice) {
            utterance.voice = finnishVoice;
        }

        speechSynthesis.speak(utterance);
    } else {
        console.warn('Speech synthesis not supported');
    }
}

// Speak slowly for learning
function speakSlow(text) {
    speak(text, 0.5);
}

// Alias for speak function
function speakFinnish(text) {
    speak(text);
}

// Make speak functions available globally
window.speak = speak;
window.speakSlow = speakSlow;
window.speakFinnish = speakFinnish;

// Load voices when available
if ('speechSynthesis' in window) {
    // Chrome requires waiting for voices to load
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = () => {
            speechSynthesis.getVoices();
        };
    }
}

// ============================
// Back to Top Button
// ============================
function initBackToTop() {
    // Create back to top button if it doesn't exist
    let backToTop = document.getElementById('backToTop');

    if (!backToTop) {
        backToTop = document.createElement('button');
        backToTop.id = 'backToTop';
        backToTop.className = 'back-to-top';
        backToTop.innerHTML = '↑';
        backToTop.setAttribute('aria-label', 'Lên đầu trang');
        document.body.appendChild(backToTop);
    }

    // Show/hide on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    // Scroll to top on click
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ============================
// Smooth Scroll for anchor links
// ============================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ============================
// Progress Storage
// ============================
function saveProgress(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
        console.error('Error saving progress:', e);
    }
}

function loadProgress(key) {
    try {
        const saved = localStorage.getItem(key);
        return saved ? JSON.parse(saved) : null;
    } catch (e) {
        console.error('Error loading progress:', e);
        return null;
    }
}

// Make progress functions available globally
window.saveProgress = saveProgress;
window.loadProgress = loadProgress;

// ============================
// Utility Functions
// ============================
function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

window.shuffleArray = shuffleArray;

// ============================
// Tree Collapse/Expand (for Grammar & Verbs pages)
// ============================
function initTreeNodes() {
    const treeNodes = document.querySelectorAll('.tree-node');

    treeNodes.forEach(node => {
        const header = node.querySelector('.node-header');
        if (header) {
            header.addEventListener('click', () => {
                node.classList.toggle('expanded');
            });
        }
    });
}

// Call tree init if there are tree nodes on the page
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.tree-node')) {
        initTreeNodes();
    }
});

// ============================
// Vocabulary Filter (for Vocabulary page)
// ============================
function initVocabularyFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const vocabTopics = document.querySelectorAll('.vocab-topic');

    if (filterBtns.length === 0) return;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const topic = btn.dataset.topic;

            // Filter topics
            vocabTopics.forEach(section => {
                if (topic === 'all' || section.dataset.topic === topic) {
                    section.style.display = 'block';
                } else {
                    section.style.display = 'none';
                }
            });
        });
    });
}

// Call vocabulary filter init if on vocabulary page
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.topic-filter')) {
        initVocabularyFilter();
    }
});

// ============================
// Phrase Category Filter (for Phrases page)
// ============================
function initPhrasesFilter() {
    const filterBtns = document.querySelectorAll('.phrase-filter-btn');
    const phraseCategories = document.querySelectorAll('.phrase-category');

    if (filterBtns.length === 0) return;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const category = btn.dataset.category;

            phraseCategories.forEach(section => {
                if (category === 'all' || section.dataset.category === category) {
                    section.style.display = 'block';
                } else {
                    section.style.display = 'none';
                }
            });
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.phrase-filter')) {
        initPhrasesFilter();
    }
});

// ============================
// Accordion (for expandable sections)
// ============================
function initAccordions() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const isActive = item.classList.contains('active');

            // Optional: Close other accordions
            // accordionHeaders.forEach(h => h.parentElement.classList.remove('active'));

            if (isActive) {
                item.classList.remove('active');
            } else {
                item.classList.add('active');
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.accordion-header')) {
        initAccordions();
    }
});

// ============================
// Tabs (generic tab functionality)
// ============================
function initTabs() {
    const tabGroups = document.querySelectorAll('.tabs');

    tabGroups.forEach(group => {
        const tabs = group.querySelectorAll('.tab-btn');
        const contents = group.parentElement.querySelectorAll('.tab-content');

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                contents.forEach(c => c.classList.remove('active'));

                tab.classList.add('active');
                const targetId = tab.dataset.tab;
                const targetContent = document.getElementById(targetId);
                if (targetContent) {
                    targetContent.classList.add('active');
                }
            });
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.tabs')) {
        initTabs();
    }
});
