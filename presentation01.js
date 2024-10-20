const slides = [
    {
        title: "Numerical Analysis",
        content: "Interpolation, Extrapolation, and Finite Differences"
    },
    {
        title: "Interpolation",
        content: "Estimating unknown values between known data points"
    },
    {
        title: "Types of Interpolation",
        content: "Linear Interpolation, Polynomial Interpolation, Spline Interpolation"
    },
    {
        title: "Extrapolation",
        content: "Estimating values outside the range of known data points"
    },
    {
        title: "Finite Differences",
        content: "Forward Difference, Backward Difference, Central Difference"
    },
    {
        title: "Newton's Gregory Forward Difference Formula",
        content: "<p class='math'>f(x) = f(x₀) + p∆f(x₀) + (p(p-1)/2!)∆²f(x₀) + ...</p>"
    },
    {
        title: "Newton's Gregory Backward Difference Formula",
        content: "<p class='math'>f(x) = f(xₙ) + p∇f(xₙ) + (p(p+1)/2!)∇²f(xₙ) + ...</p>"
    },
    {
        title: "Problem Solving",
        content: "Examples using Forward and Backward Difference Methods"
    }
];

let currentSlide = 0;
const slidesContainer = document.getElementById('slides');
const prevButton = document.getElementById('prevSlide');
const nextButton = document.getElementById('nextSlide');
const toggleDrawButton = document.getElementById('toggleDraw');
const clearCanvasButton = document.getElementById('clearCanvas');
const canvas = document.getElementById('drawCanvas');
const ctx = canvas.getContext('2d');

let isDrawing = false;
let isDrawMode = false;

function createSlides() {
    slides.forEach((slide, index) => {
        const slideElement = document.createElement('div');
        slideElement.className = 'slide';
        slideElement.style.transform = `translateX(${100 * index}%)`;
        slideElement.innerHTML = `
            <div class="slide-content">
                <h1>${slide.title}</h1>
                ${slide.content}
            </div>
        `;
        slidesContainer.appendChild(slideElement);
    });
}

function updateSlides() {
    const allSlides = document.querySelectorAll('.slide');
    allSlides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
    });
}

function nextSlide() {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        updateSlides();
        saveDrawing();
        clearCanvas();
        loadDrawing();
    }
}

function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
        updateSlides();
        saveDrawing();
        clearCanvas();
        loadDrawing();
    }
}

function toggleDraw() {
    isDrawMode = !isDrawMode;
    canvas.style.pointerEvents = isDrawMode ? 'auto' : 'none';
    toggleDrawButton.textContent = isDrawMode ? 'Disable Draw' : 'Enable Draw';
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function saveDrawing() {
    const drawingData = canvas.toDataURL();
    localStorage.setItem(`drawing_${currentSlide}`, drawingData);
}

function loadDrawing() {
    const drawingData = localStorage.getItem(`drawing_${currentSlide}`);
    if (drawingData) {
        const img = new Image();
        img.onload = function() {
            ctx.drawImage(img, 0, 0);
        }
        img.src = drawingData;
    }
}

function startDrawing(e) {
    if (!isDrawMode) return;
    isDrawing = true;
    draw(e);
}

function stopDrawing() {
    isDrawing = false;
    ctx.beginPath();
}

function draw(e) {
    if (!isDrawing || !isDrawMode) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#000000';

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
}

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    loadDrawing();
}

createSlides();
resizeCanvas();

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);
toggleDrawButton.addEventListener('click', toggleDraw);
clearCanvasButton.addEventListener('click', clearCanvas);

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);

window.addEventListener('resize', resizeCanvas);

// Load initial drawing if any
loadDrawing();
