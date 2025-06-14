// Command data for the bot
const commands = [
    // Main Commands (Visible on homepage)
    {
        name: "help",
        description: "Show comprehensive help menu with dropdown categories for all commands",
        usage: "/help",
        category: "utility",
        premium: false,
        is_main: true,
        sub_commands: []
    },
    {
        name: "level",
        description: "Check your or someone else's level and XP progress",
        usage: "/level @user",
        category: "leveling",
        premium: false,
        new: true,
        is_main: true,
        sub_commands: ["level_leaderboard", "leveling_settings", "set_role_reward", "remove_role_reward", "role_rewards", "set_level_up_channel", "disable_level_up_channel", "toggle_level_up_dm", "leveling_setup"]
    },
    {
        name: "giveaway",
        description: "Start a giveaway with role restrictions and time limits (Admin only)",
        usage: "/giveaway prize:\"Discord Nitro\" duration:\"1d 2h\" winners:1 required_role:@VIP",
        category: "entertainment",
        premium: false,
        fan_favorite: true,
        is_main: true,
        sub_commands: []
    },
    {
        name: "would_you_rather",
        description: "Play Would You Rather with custom options and voting",
        usage: "/would_you_rather \"Option A\" \"Option B\"",
        category: "entertainment",
        premium: false,
        new: true,
        is_main: true,
        sub_commands: []
    },
    {
        name: "truth_or_dare",
        description: "Get random truth or dare challenges with difficulty levels",
        usage: "/truth_or_dare category:both difficulty:medium",
        category: "entertainment",
        premium: false,
        new: true,
        is_main: true,
        sub_commands: []
    },
    {
        name: "rate",
        description: "Rate anything on a scale of 1-10 with funny comments",
        usage: "/rate \"Your favorite movie\"",
        category: "entertainment",
        premium: false,
        new: true,
        is_main: true,
        sub_commands: []
    },
    {
        name: "roast",
        description: "Get a playful roast (all in good fun!)",
        usage: "/roast",
        category: "entertainment",
        premium: false,
        new: true,
        is_main: true,
        sub_commands: []
    },
    {
        name: "daily_quote",
        description: "Get an inspiring daily quote from famous people",
        usage: "/daily_quote",
        category: "entertainment",
        premium: false,
        new: true,
        is_main: true,
        sub_commands: []
    },
    {
        name: "random_fact",
        description: "Learn a random interesting fact",
        usage: "/random_fact",
        category: "entertainment",
        premium: false,
        new: true,
        is_main: true,
        sub_commands: []
    },
    {
        name: "connect4",
        description: "Start a game of Connect 4 with another player",
        usage: "/connect4 @opponent",
        category: "entertainment",
        premium: false,
        new: true,
        is_main: true,
        sub_commands: []
    },
    {
        name: "wordle",
        description: "Start a game of Wordle - guess the 5-letter word using the modal button",
        usage: "/wordle",
        category: "entertainment",
        premium: false,
        new: true,
        is_main: true,
        sub_commands: ["wordle_status"]
    },
    {
        name: "malwaremode",
        description: "Activate entertainment mode with dramatic effects",
        usage: "/malwaremode",
        category: "entertainment",
        premium: false,
        is_main: true,
        sub_commands: ["stopmalware", "malwarestatus"]
    },
    {
        name: "poll",
        description: "Create interactive polls for your server",
        usage: "/poll \"Question\" \"Option 1\" \"Option 2\"",
        category: "entertainment",
        premium: false,
        is_main: true,
        sub_commands: []
    },
    {
        name: "flip",
        description: "Flip a coin for random decisions",
        usage: "/flip",
        category: "entertainment",
        premium: false,
        is_main: true,
        sub_commands: []
    },
    {
        name: "roll",
        description: "Roll dice with custom sides",
        usage: "/roll 20",
        category: "entertainment",
        premium: false,
        is_main: true,
        sub_commands: []
    },
    {
        name: "choose",
        description: "Let the bot choose from multiple options",
        usage: "/choose \"Option 1\" \"Option 2\" \"Option 3\"",
        category: "entertainment",
        premium: false,
        is_main: true,
        sub_commands: []
    },
    {
        name: "eight_ball",
        description: "Ask the magic 8-ball a question",
        usage: "/eight_ball \"Will I win today?\"",
        category: "entertainment",
        premium: false,
        is_main: true,
        sub_commands: []
    },
    {
        name: "user_info",
        description: "Get detailed information about a user",
        usage: "/user_info @user",
        category: "utility",
        premium: false,
        is_main: true,
        sub_commands: []
    },
    {
        name: "avatar",
        description: "View user's avatar in high resolution",
        usage: "/avatar @user",
        category: "utility",
        premium: false,
        is_main: true,
        sub_commands: []
    },
    {
        name: "ping",
        description: "Check bot's response time and latency",
        usage: "/ping",
        category: "utility",
        premium: false,
        is_main: true,
        sub_commands: []
    },
    {
        name: "reminder",
        description: "Set a reminder for yourself or the server",
        usage: "/reminder 1h \"Meeting in 1 hour\"",
        category: "utility",
        premium: false,
        is_main: true,
        sub_commands: []
    },
    {
        name: "calculator",
        description: "Perform mathematical calculations",
        usage: "/calculator 2 + 2 * 3",
        category: "utility",
        premium: false,
        is_main: true,
        sub_commands: []
    },
    {
        name: "server_info",
        description: "Display detailed server information",
        usage: "/server_info",
        category: "utility",
        premium: false,
        is_main: true,
        sub_commands: []
    },
    {
        name: "bot_info",
        description: "Show bot statistics and information",
        usage: "/bot_info",
        category: "utility",
        premium: false,
        is_main: true,
        sub_commands: []
    },
    {
        name: "ban",
        description: "Ban a user from the server",
        usage: "/ban @user reason:Breaking rules",
        category: "moderation",
        premium: false,
        is_main: true,
        sub_commands: []
    },
    {
        name: "kick",
        description: "Kick a user from the server",
        usage: "/kick @user reason:Breaking rules",
        category: "moderation",
        premium: false,
        is_main: true,
        sub_commands: []
    },
    {
        name: "timeout",
        description: "Timeout a user for specified duration",
        usage: "/timeout @user 1h reason:Spam",
        category: "moderation",
        premium: false,
        is_main: true,
        sub_commands: []
    },
    {
        name: "clear",
        description: "Clear messages from a channel",
        usage: "/clear 10",
        category: "moderation",
        premium: false,
        is_main: true,
        sub_commands: []
    },
    {
        name: "warn",
        description: "Warn a user for rule violations",
        usage: "/warn @user reason:Breaking rules",
        category: "moderation",
        premium: false,
        is_main: true,
        sub_commands: []
    },
    {
        name: "raid_protection",
        description: "Configure intelligent raid detection and protection",
        usage: "/raid_protection enabled:true join_threshold:10 time_window:60",
        category: "premium",
        premium: true,
        is_main: true,
        sub_commands: []
    },
    {
        name: "invite_tracking",
        description: "Set up detailed invite analytics and member tracking",
        usage: "/invite_tracking enabled:true #channel",
        category: "premium",
        premium: true,
        is_main: true,
        sub_commands: []
    },
    {
        name: "ticket_setup",
        description: "Create professional support ticket system",
        usage: "/ticket_setup #category @support-role",
        category: "premium",
        premium: true,
        is_main: true,
        sub_commands: []
    },
    {
        name: "social_alerts",
        description: "Monitor social media accounts for mentions",
        usage: "/social_alerts #channel username:your_username",
        category: "premium",
        premium: true,
        is_main: true,
        sub_commands: []
    },
    {
        name: "welcome_setup",
        description: "Configure custom welcome messages for new members",
        usage: "/welcome_setup #channel \"Welcome message\"",
        category: "premium",
        premium: true,
        is_main: true,
        sub_commands: []
    },
    {
        name: "premium_info",
        description: "View your premium subscription status and features",
        usage: "/premium_info",
        category: "premium",
        premium: true,
        is_main: true,
        sub_commands: []
    },
    {
        name: "premiumsetup",
        description: "Set up premium features for your server",
        usage: "/premiumsetup",
        category: "premium",
        premium: true,
        is_main: true,
        sub_commands: []
    },

    // Sub-commands (Hidden by default, shown when main command is expanded)
    {
        name: "level_leaderboard",
        description: "View the server's level leaderboard",
        usage: "/level_leaderboard",
        category: "leveling",
        premium: false,
        new: true,
        is_main: false,
        parent_command: "level"
    },
    {
        name: "leveling_settings",
        description: "Configure leveling system settings (Admin only)",
        usage: "/leveling_settings enabled:true xp_per_message:15",
        category: "leveling",
        premium: false,
        new: true,
        is_main: false,
        parent_command: "level"
    },
    {
        name: "set_role_reward",
        description: "Set a role reward for a specific level (Admin only)",
        usage: "/set_role_reward level:5 @role",
        category: "leveling",
        premium: false,
        new: true,
        is_main: false,
        parent_command: "level"
    },
    {
        name: "remove_role_reward",
        description: "Remove a role reward for a specific level (Admin only)",
        usage: "/remove_role_reward level:5",
        category: "leveling",
        premium: false,
        new: true,
        is_main: false,
        parent_command: "level"
    },
    {
        name: "role_rewards",
        description: "View all configured role rewards",
        usage: "/role_rewards",
        category: "leveling",
        premium: false,
        new: true,
        is_main: false,
        parent_command: "level"
    },
    {
        name: "set_level_up_channel",
        description: "Set a specific channel for level-up notifications (Admin only)",
        usage: "/set_level_up_channel #channel",
        category: "leveling",
        premium: false,
        new: true,
        is_main: false,
        parent_command: "level"
    },
    {
        name: "disable_level_up_channel",
        description: "Disable level-up channel notifications (Admin only)",
        usage: "/disable_level_up_channel",
        category: "leveling",
        premium: false,
        new: true,
        is_main: false,
        parent_command: "level"
    },
    {
        name: "toggle_level_up_dm",
        description: "Toggle DM notifications for level-ups (Admin only)",
        usage: "/toggle_level_up_dm",
        category: "leveling",
        premium: false,
        new: true,
        is_main: false,
        parent_command: "level"
    },
    {
        name: "leveling_setup",
        description: "Interactive setup for the leveling system with embed interface (Admin only)",
        usage: "/leveling_setup",
        category: "leveling",
        premium: false,
        new: true,
        is_main: false,
        parent_command: "level"
    },
    {
        name: "wordle_status",
        description: "Check your current Wordle game status",
        usage: "/wordle_status",
        category: "entertainment",
        premium: false,
        new: true,
        is_main: false,
        parent_command: "wordle"
    },
    {
        name: "stopmalware",
        description: "Deactivate malware mode and restore server",
        usage: "/stopmalware",
        category: "entertainment",
        premium: false,
        is_main: false,
        parent_command: "malwaremode"
    },
    {
        name: "malwarestatus",
        description: "Check current malware mode status",
        usage: "/malwarestatus",
        category: "entertainment",
        premium: false,
        is_main: false,
        parent_command: "malwaremode"
    },
    {
        name: "word_of_the_day",
        description: "Learn a new word with definition and example",
        usage: "/word_of_the_day",
        category: "entertainment",
        premium: false,
        is_main: false,
        parent_command: "entertainment"
    },
    {
        name: "joke",
        description: "Get a random joke to brighten your day",
        usage: "/joke",
        category: "entertainment",
        premium: false,
        is_main: false,
        parent_command: "entertainment"
    },
    {
        name: "riddle",
        description: "Get a random riddle with hidden answer",
        usage: "/riddle",
        category: "entertainment",
        premium: false,
        is_main: false,
        parent_command: "entertainment"
    },
    {
        name: "pick_my",
        description: "Let the bot pick something for you from multiple choices",
        usage: "/pick_my \"Choice 1, Choice 2, Choice 3\"",
        category: "entertainment",
        premium: false,
        is_main: false,
        parent_command: "entertainment"
    },
    {
        name: "countdown",
        description: "Start a countdown timer with notification",
        usage: "/countdown minutes:5 seconds:30",
        category: "utility",
        premium: false,
        is_main: false,
        parent_command: "utility"
    },
    {
        name: "stats",
        description: "View your personal bot usage statistics",
        usage: "/stats",
        category: "utility",
        premium: false,
        is_main: false,
        parent_command: "utility"
    }
];

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    initializeCommands();
    initializeNavigation();
    initializeAnimations();
    // initializeDashboard(); // Removed as dashboard is now a separate page / coming soon
});

// Initialize command system
function initializeCommands() {
    const commandsGrid = document.getElementById('commandsGrid');
    const categoryButtons = document.querySelectorAll('.category-btn');
    
    // Populate commands
    displayCommands('all');
    
    // Add event listeners to category buttons
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Display commands for selected category
            const category = this.getAttribute('data-category');
            displayCommands(category);
        });
    });
}

// Display commands based on category
function displayCommands(category) {
    const commandsGrid = document.getElementById('commandsGrid');
    commandsGrid.innerHTML = '';
    
    const filteredCommands = category === 'all' 
        ? commands.filter(cmd => cmd.is_main) 
        : commands.filter(cmd => cmd.category === category && cmd.is_main);
    
    filteredCommands.forEach(command => {
        const commandCard = createCommandCard(command);
        commandsGrid.appendChild(commandCard);
    });
    
    // Add loading animation
    setTimeout(() => {
        const cards = commandsGrid.querySelectorAll('.command-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('loaded');
            }, index * 100);
        });
    }, 100);
}

// Create command card element
function createCommandCard(command) {
    const card = document.createElement('div');
    card.className = 'command-card loading';
    
    const newTag = command.new ? '<span class="command-new">New</span>' : '';
    const fanFavoriteTag = command.fan_favorite ? '<span class="command-fan-favorite">Fan Favorite</span>' : '';
    
    // Determine category class and label
    let categoryClass = 'free';
    let categoryLabel = 'Free';
    
    if (command.premium) {
        categoryClass = 'premium';
        categoryLabel = 'Premium';
    } else if (command.category === 'leveling') {
        categoryClass = 'leveling';
        categoryLabel = 'Leveling';
    }
    
    // Add popup button if command has sub-commands
    const popupButton = command.sub_commands && command.sub_commands.length > 0 
        ? '<button class="popup-btn" onclick="showRelatedCommands(\'' + command.name + '\')"><i class="fas fa-list"></i> Related Commands</button>'
        : '';
    
    card.innerHTML = `
        <div class="command-header">
            <span class="command-name">/${command.name}</span>
            <div class="command-tags">
                ${newTag}
                ${fanFavoriteTag}
                <span class="command-category ${categoryClass}">
                    ${categoryLabel}
                </span>
            </div>
        </div>
        <p class="command-description">${command.description}</p>
        <div class="command-usage">${command.usage}</div>
        ${popupButton}
    `;
    
    return card;
}

// Show related commands in popup
function showRelatedCommands(commandName) {
    const mainCommand = commands.find(cmd => cmd.name === commandName);
    if (!mainCommand || !mainCommand.sub_commands) return;
    
    const subCommands = commands.filter(cmd => 
        mainCommand.sub_commands.includes(cmd.name) && cmd.is_main === false
    );
    
    // Create popup overlay
    const overlay = document.createElement('div');
    overlay.className = 'popup-overlay';
    overlay.onclick = () => closePopup();
    
    // Create popup content
    const popup = document.createElement('div');
    popup.className = 'related-commands-popup';
    popup.onclick = (e) => e.stopPropagation();
    
    popup.innerHTML = `
        <div class="popup-header">
            <h3>Related Commands for /${commandName}</h3>
            <button class="close-btn" onclick="closePopup()"><i class="fas fa-times"></i></button>
        </div>
        <div class="popup-content">
            ${subCommands.map(subCommand => createSubCommandHTML(subCommand)).join('')}
        </div>
    `;
    
    overlay.appendChild(popup);
    document.body.appendChild(overlay);
    
    // Animate in
    setTimeout(() => {
        overlay.classList.add('active');
    }, 10);
}

// Close popup
function closePopup() {
    const overlay = document.querySelector('.popup-overlay');
    if (overlay) {
        overlay.classList.remove('active');
        setTimeout(() => {
            document.body.removeChild(overlay);
        }, 300);
    }
}

// Create sub-command HTML for popup
function createSubCommandHTML(command) {
    const newTag = command.new ? '<span class="command-new">New</span>' : '';
    
    // Determine category class and label
    let categoryClass = 'free';
    let categoryLabel = 'Free';
    
    if (command.premium) {
        categoryClass = 'premium';
        categoryLabel = 'Premium';
    } else if (command.category === 'leveling') {
        categoryClass = 'leveling';
        categoryLabel = 'Leveling';
    }
    
    return `
        <div class="popup-command-card">
            <div class="popup-command-header">
                <span class="command-name">/${command.name}</span>
                <div class="command-tags">
                    ${newTag}
                    <span class="command-category ${categoryClass}">
                        ${categoryLabel}
                    </span>
                </div>
            </div>
            <p class="command-description">${command.description}</p>
            <div class="command-usage">${command.usage}</div>
        </div>
    `;
}

// Initialize navigation
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only prevent default for internal links (starting with #)
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
            // External links (like about.html) will work normally
        });
    });
    
    // Active navigation highlighting
    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Initialize animations
function initializeAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('loaded');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.feature-card, .premium-card, .dashboard-card'); // Retain dashboard-card for future re-use if needed
    animateElements.forEach(el => {
        el.classList.add('loading');
        observer.observe(el);
    });
}

// Utility functions
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

function inviteBot() {
    // Replace with your actual bot invite link
    const inviteUrl = 'https://discord.com/oauth2/authorize?client_id=1336816319152001115';
    window.open(inviteUrl, '_blank');
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add some interactive features
document.addEventListener('DOMContentLoaded', function() {
    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
    
    // Counter animation for stats
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        const target = parseInt(stat.textContent);
        const increment = target / 50;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                stat.textContent = Math.floor(current) + (stat.textContent.includes('+') ? '+' : '');
                requestAnimationFrame(updateCounter);
            } else {
                stat.textContent = stat.textContent;
            }
        };
        
        // Start counter animation when stats come into view
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(stat);
    });
});