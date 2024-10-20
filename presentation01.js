const slides = [
    {
        title: "Numerical Analysis",
        content: `
            <h2>Table of Contents</h2>
            <ol class="toc">
                <li onclick="goToSlide(1)">Interpolation and Extrapolation</li>
                <li onclick="goToSlide(2)">Types of Interpolation</li>
                <li onclick="goToSlide(3)">Extrapolation</li>
                <li onclick="goToSlide(4)">Finite Differences</li>
                <li onclick="goToSlide(5)">Newton's Gregory Forward Difference Formula</li>
                <li onclick="goToSlide(6)">Newton's Gregory Backward Difference Formula</li>
                <li onclick="goToSlide(7)">Problem Solving: Forward Difference Method</li>
                <li onclick="goToSlide(8)">Problem Solving: Backward Difference Method</li>
            </ol>
        `
    },
    {
        title: "Interpolation and Extrapolation",
        content: `
            <p><strong>Interpolation</strong> is the method of estimating unknown values that fall between known values. It's used when you have a set of data points and want to estimate values within the range of the given data points.</p>
            <p><strong>Extrapolation</strong> is the process of estimating values outside the range of known data points. It assumes that the pattern observed within the data continues in the same way outside the known data range.</p>
            <img src="/api/placeholder/400/300" alt="Interpolation vs Extrapolation graph">
        `
    },
    {
        title: "Types of Interpolation",
        content: `
            <h2>Linear Interpolation</h2>
            <p>The simplest form where we assume that the change between two points is linear.</p>
            <p class="math">f(x) = y₀ + ((x - x₀) / (x₁ - x₀))(y₁ - y₀)</p>
            
            <h2>Polynomial Interpolation</h2>
            <p>Fits a polynomial to the given data points. Common types include:</p>
            <ul>
                <li>Lagrange Interpolation</li>
                <li>Newton's Interpolation (Divided Differences)</li>
            </ul>
            
            <h2>Spline Interpolation</h2>
            <p>A piecewise polynomial interpolation where splines (usually cubic) are fitted between data points for a smoother approximation.</p>
        `
    },
    {
        title: "Extrapolation",
        content: `
            <p>Extrapolation can be more uncertain and error-prone because it assumes that the pattern observed within the data continues in the same way outside the known data range.</p>
            
            <h2>Types of Extrapolation:</h2>
            <ul>
                <li><strong>Linear Extrapolation:</strong> Assuming the trend continues linearly beyond the known points.</li>
                <li><strong>Polynomial Extrapolation:</strong> Extending a polynomial fit to data points beyond the known range.</li>
                <li><strong>Exponential and Logarithmic Extrapolation:</strong> Using known models to extend data (for example, in population growth).</li>
            </ul>
            
            <p><strong>Linear Extrapolation Formula:</strong></p>
            <p class="math">f(x) = y₁ + ((x - x₁) / (x₂ - x₁))(y₂ - y₁)</p>
            <p>For points (x₁, y₁) and (x₂, y₂), we estimate f(x) beyond x₂.</p>
        `
    },
    {
        title: "Finite Differences",
        content: `
            <p>Finite differences are used for numerical differentiation and interpolation. They represent differences between function values at specific points.</p>
            
            <h2>Types of Finite Differences:</h2>
            <ul>
                <li><strong>Forward Difference:</strong> The difference between a function value and its successor.
                    <p class="math">Δf(xᵢ) = f(xᵢ₊₁) - f(xᵢ)</p>
                </li>
                <li><strong>Backward Difference:</strong> The difference between a function value and its predecessor.
                    <p class="math">∇f(xᵢ) = f(xᵢ) - f(xᵢ₋₁)</p>
                </li>
                <li><strong>Central Difference:</strong> The difference between values on both sides of a point.
                    <p class="math">δf(xᵢ) = (f(xᵢ₊₁) - f(xᵢ₋₁)) / 2</p>
                </li>
            </ul>
            
            <h2>The Operator E (Shift Operator)</h2>
            <p>The operator E, called the shift operator, is defined as:</p>
            <p class="math">Ef(xᵢ) = f(xᵢ₊₁)</p>
            <p>It's useful in expressing finite differences as:</p>
            <p class="math">Δf(xᵢ) = (E - 1)f(xᵢ)</p>
        `
    },
    {
        title: "Newton's Gregory Forward Difference Formula",
        content: `
            <p>Used for interpolation when the data points are equally spaced.</p>
            
            <h2>Formula:</h2>
            <p class="math">f(x) = f(x₀) + pΔf(x₀) + (p(p-1)/2!)Δ²f(x₀) + (p(p-1)(p-2)/3!)Δ³f(x₀) + ...</p>
            <p>Where p = (x - x₀) / h and h is the spacing between points.</p>
            
            <h2>Proof Outline:</h2>
            <ol>
                <li>Start from the finite difference definition</li>
                <li>Apply the binomial expansion to the forward difference operator</li>
                <li>Derive the formula step-by-step</li>
            </ol>
            
            <p>This formula is particularly useful when interpolating near the beginning of a dataset.</p>
        `
    },
    {
        title: "Newton's Gregory Backward Difference Formula",
        content: `
            <p>Similar to the forward difference but works backward from the last point.</p>
            
            <h2>Formula:</h2>
            <p class="math">f(x) = f(xₙ) + p∇f(xₙ) + (p(p+1)/2!)∇²f(xₙ) + (p(p+1)(p+2)/3!)∇³f(xₙ) + ...</p>
            <p>Where p = (x - xₙ) / h and h is the spacing between points.</p>
            
            <h2>Proof Outline:</h2>
            <ol>
                <li>Use the backward difference operator</li>
                <li>Expand similarly to the forward difference formula</li>
                <li>Derive the formula step-by-step</li>
            </ol>
            
            <p>This formula is particularly useful when interpolating near the end of a dataset.</p>
        `
    },
    {
        title: "Problem Solving: Forward Difference Method",
        content: `
            <h2>Problem:</h2>
            <p>Given the following data table, estimate f(2.5) using Newton's Gregory Forward Difference Formula:</p>
            <table>
                <tr><th>x</th><th>f(x)</th></tr>
                <tr><td>1.0</td><td>1.0000</td></tr>
                <tr><td>2.0</td><td>8.0000</td></tr>
                <tr><td>3.0</td><td>27.0000</td></tr>
                <tr><td>4.0</td><td>64.0000</td></tr>
            </table>
            
            <h2>Solution:</h2>
            <ol>
                <li>Create a finite difference table</li>
                <li>Apply Newton's Forward Difference Formula</li>
                <li>Calculate p = (2.5 - 2.0) / 1 = 0.5</li>
                <li>Substitute values into the formula</li>
                <li>Simplify and calculate the result</li>
            </ol>
            
            <p><strong>Result:</strong> f(2.5) ≈ 15.625</p>
        `
    },
    {
        title: "Problem Solving: Backward Difference Method",
        content: `
            <h2>Problem:</h2>
            <p>Using the same data as before, estimate f(2.5) using Newton's Gregory Backward Difference Formula:</p>
            <table>
                <tr><th>x</th><th>f(x)</th></tr>
                <tr><td>1.0</td><td>1.0000</td></tr>
                <tr><td>2.0</td><td>8.0000</td></tr>
                <tr><td>3.0</td><td>27.0000</td></tr>
                <tr><td>4.0</td><td>64.0000</td></tr>
            </table>
            
            <h2>Solution:</h2>
            <ol>
                <li>Create a backward difference table</li>
                <li>Apply Newton's Backward Difference Formula</li>
                <li>Calculate p = (2.5 - 3.0) / 1 = -0.5</li>
                <li>Substitute values into the formula</li>
                <li>Simplify and calculate the result</li>
            </ol>
            
            <p><strong>Result:</strong> f(2.5) ≈ 15.625</p>
            
            <p>Note that both methods yield the same result, demonstrating the consistency of these interpolation techniques.</p>
        `
    }
];

let currentSlide = 0;
const slidesContainer = document.getElementById('slides');
const prevButton = document.getElementById('prevSlide');
const nextButton = document.getElementById('nextSlide');
const toggleDrawButton = document.getElementById('toggleDraw');
const clearCanvasButton = document.getElementById('clearCanvas');
const colorPicker = document.getElementById('colorPicker');
const fullscreenButton = document.getElementById('toggleFullscreen');
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

function goToSlide(index) {
    if (index >= 0 && index < slides.length) {
        currentSlide = index;
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
    ctx.strokeStyle = colorPicker.value;

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

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

createSlides();
resizeCanvas();

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);
toggleDrawButton.addEventListener('click', toggleDraw);
clearCanvasButton.addEventListener('click', clearCanvas);
fullscreenButton.addEventListener('click', toggleFullscreen);

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);

window.addEventListener('resize', resizeCanvas);

// Load initial drawing if any
loadDrawing();

// Initialize MathJax
MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
