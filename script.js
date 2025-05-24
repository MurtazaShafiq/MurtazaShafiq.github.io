// Handle scroll-based background lightening
document.addEventListener('scroll', () => {
    const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    const maxOpacity = 0.25; // Increased maximum white overlay opacity
    const opacity = Math.min((scrollPercentage / 100) * maxOpacity, maxOpacity);
    
    // Apply the overlay with a slight delay for smoother effect
    requestAnimationFrame(() => {
        document.documentElement.style.setProperty('--bg-overlay', `rgba(255, 255, 255, ${opacity})`);
    });
}); 