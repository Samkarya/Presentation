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
    title: "1. Interpolation and Extrapolation",
    content: `
        <h2>1.1. Definition and Overview</h2>
        <p><strong>Interpolation:</strong> The process of estimating unknown values that fall within the range of known data points.</p>
        <p><strong>Extrapolation:</strong> The process of estimating values beyond the known data range, assuming the pattern of the data continues.</p>
        <p>Both techniques are used in various fields like data analysis, machine learning, and scientific computation to predict or estimate unknown values.</p>
        
        <h2>1.2. Types of Interpolation</h2>
        <p>There are different types of interpolation methods, each used based on the complexity and nature of the data:</p>
        <ul>
            <li>Linear Interpolation</li>
            <li>Polynomial Interpolation</li>
            <li>Spline Interpolation</li>
        </ul>
    `
},

{
    title: "1.2.1. Linear Interpolation",
    content: `
        <h2>Linear Interpolation</h2>
        <p>Linear interpolation is the simplest form of interpolation where we assume that the change between two points is linear, meaning that the rate of change between the points remains constant.</p>
        <p class="math">f(x) = y₀ + ((x - x₀) / (x₁ - x₀)) * (y₁ - y₀)</p>
        <p>Here:
        <ul>
            <li><strong>x:</strong> The point at which the value is to be interpolated.</li>
            <li><strong>x₀, x₁:</strong> The known data points (with x₀ < x < x₁).</li>
            <li><strong>y₀, y₁:</strong> The corresponding values of the known points.</li>
        </ul>
        </p>
        <p>Linear interpolation is widely used when dealing with two data points and when the data is expected to change at a constant rate.</p>
    `
},

{
    title: "1.2.2. Polynomial Interpolation",
    content: `
        <h2>Polynomial Interpolation</h2>
        <p>Polynomial interpolation fits a polynomial to the given set of data points. The degree of the polynomial depends on the number of points used. Higher-degree polynomials provide a more accurate fit for complex data.</p>
        <p>Common methods of polynomial interpolation include:</p>
        <ul>
            <li><strong>Lagrange Interpolation:</strong> Constructs a polynomial that passes through all given data points using Lagrange basis polynomials.</li>
            <li><strong>Newton's Interpolation:</strong> Uses divided differences to construct a polynomial that fits the data points.</li>
        </ul>
        <p>Polynomial interpolation is highly accurate for small data sets but can become unstable or oscillatory when applied to large data sets (a phenomenon known as Runge's phenomenon).</p>
    `
},

{
    title: "1.2.3. Spline Interpolation",
    content: `
        <h2>Spline Interpolation</h2>
        <p>Spline interpolation is a piecewise polynomial interpolation where low-degree polynomials, known as splines, are fitted between each pair of data points. The most commonly used spline is the cubic spline.</p>
        <p><strong>Cubic Spline:</strong> A piecewise cubic polynomial where the second derivative at each data point is continuous, providing a smooth approximation across the entire range.</p>
        <p>Spline interpolation is particularly useful when you need smooth approximations that avoid oscillations seen in high-degree polynomial interpolation. It's widely used in graphics, data fitting, and modeling.</p>
        <p>Advantages of spline interpolation:
        <ul>
            <li>Provides smooth transitions between data points.</li>
            <li>More stable than high-degree polynomial interpolation.</li>
            <li>Commonly used in practical applications like computer graphics and curve fitting.</li>
        </ul>
        </p>
    `
},

{
    title: "1.3. Types of Extrapolation",
    content: `
        <h2>Types of Extrapolation</h2>
        <p>Extrapolation involves estimating values outside the known range of data. There are different methods depending on the nature of the data and assumptions about its trend beyond the known points:</p>
        <ul>
            <li><strong>Linear Extrapolation:</strong> Assumes that the trend observed between the data points continues in a straight line beyond the given data.</li>
            <li><strong>Polynomial Extrapolation:</strong> Uses a polynomial function fitted to the data points to predict values beyond the known range.</li>
            <li><strong>Constrained Extrapolation:</strong> Adds constraints or limits to prevent unrealistic results, often used in physical modeling where certain boundaries must be respected.</li>
        </ul>
        <p>Extrapolation is useful for predicting future values, but it carries higher risk of error compared to interpolation, as it relies on assumptions about data behavior outside the known range.</p>
    `
},

{
    title: "1.4. Practical Applications of Interpolation and Extrapolation",
    content: `
        <h2>Practical Applications of Interpolation and Extrapolation</h2>
        <p>Interpolation and extrapolation techniques are widely used in various fields to estimate unknown values and predict future data:</p>
        <ul>
            <li><strong>Data Analysis:</strong> Filling in missing data points or estimating trends within a dataset (e.g., market research, surveys).</li>
            <li><strong>Scientific Research:</strong> Predicting future values based on existing experimental data (e.g., climate studies, population growth).</li>
            <li><strong>Engineering:</strong> Estimating material behavior under different conditions using interpolation and extrapolation techniques (e.g., stress-strain analysis).</li>
            <li><strong>Computer Graphics:</strong> Interpolating points for rendering smooth curves and surfaces in animations and 3D modeling.</li>
            <li><strong>Economics and Finance:</strong> Predicting stock prices or economic trends using historical data and trend analysis.</li>
        </ul>
        <p>These methods help make informed decisions, predict trends, and model real-world phenomena where direct measurements are either unavailable or impractical.</p>
    `
},

{
    title: "2. Finite Differences",
    content: `
        <h2>2.1. Introduction to Finite Differences</h2>
        <p>Finite differences are a set of techniques used to approximate derivatives by using differences between function values at specific points. These methods are essential in numerical analysis, especially for solving differential equations, interpolation, and numerical differentiation.</p>
        <p>Types of finite differences include:</p>
        <ul>
            <li><strong>Forward Differences:</strong> Compares a function value at a given point with the value at a point ahead.</li>
            <li><strong>Backward Differences:</strong> Compares a function value at a given point with the value at a point behind.</li>
            <li><strong>Central Differences:</strong> Uses the average of the forward and backward differences for better approximation.</li>
        </ul>
        <p>Finite differences are widely used in the construction of difference tables, essential for interpolation methods like Newton's divided differences.</p>
    `
},

{
    title: "2.2. Forward Differences",
    content: `
        <h2>Forward Differences</h2>
        <p>Forward differences are used to approximate the derivative of a function by using the difference between successive values of the function at regularly spaced intervals. The forward difference is defined as:</p>
        <p class="math">Δf(x₀) = f(x₁) - f(x₀)</p>
        <p>Where:
        <ul>
            <li><strong>x₀, x₁:</strong> Consecutive points where the function is evaluated.</li>
            <li><strong>f(x₀), f(x₁):</strong> Values of the function at those points.</li>
        </ul>
        </p>
        <p>For regularly spaced points, forward differences can be used to create a difference table, which is useful in interpolation formulas like the Newton-Gregory forward difference interpolation.</p>
        <p>Forward differences are often used when data points are equally spaced and when constructing interpolation formulas for estimating unknown values within a given data set.</p>
    `
},

{
    title: "2.3. Backward Differences",
    content: `
        <h2>Backward Differences</h2>
        <p>Backward differences are another method for approximating the derivative of a function, focusing on the difference between the current function value and the previous one. The backward difference is defined as:</p>
        <p class="math">∇f(x₀) = f(x₀) - f(x<sub>-1</sub>)</p>
        <p>Where:
        <ul>
            <li><strong>x₀, x_{-1}:</strong> Consecutive points where the function is evaluated, with x₀ being the current point.</li>
            <li><strong>f(x₀), f(x<sub>-1</sub>):</strong> Values of the function at those points.</li>
        </ul>
        </p>
        <p>Backward differences are particularly useful when data points are equally spaced and are often employed in constructing difference tables for backward interpolation methods.</p>
        <p>They provide an efficient way to estimate function values when only past data points are available, making them valuable in various numerical analysis applications.</p>
    `
},

{
    "title": "2.4. Central Differences",
    "content": `
        <h2>Central Differences</h2>
        <p>Central differences are used to approximate the derivative of a function by considering the average of the forward and backward differences at a point. The central difference is defined as:</p>
        <p class="math">Δf(x₀) = (f(x₁) - f(x<sub>-1</sub>)) / (2h)</p>
        <p>Where:
        <ul>
            <li><strong>x₀:</strong> The point at which the derivative is being approximated.</li>
            <li><strong>x₁, x<sub>-1</sub>:</strong> The points immediately before and after x₀, respectively.</li>
            <li><strong>h:</strong> The spacing between the points (h = x₁ - x₀).</li>
        </ul>
        </p>
        <p>Central differences provide a more accurate approximation of the derivative than either forward or backward differences, especially when the data points are closely spaced.</p>
        <p>They are particularly useful in numerical differentiation and constructing difference tables for interpolation methods.</p>
    `
},

{
    title: "2.5. Finite Difference Tables",
    content: `
        <h2>Finite Difference Tables</h2>
        <p>Finite difference tables are structured tables used to organize the differences calculated from a set of data points. They are essential for interpolation methods, particularly in polynomial interpolation.</p>
        <p>The construction of a finite difference table involves:</p>
        <ul>
            <li>Calculating first-order differences (forward, backward, or central).</li>
            <li>Calculating higher-order differences by taking differences of the previous differences.</li>
            <li>Continuing this process until the desired order is achieved.</li>
        </ul>
        <p>Finite difference tables can be used for:</p>
        <ul>
            <li><strong>Estimating derivatives:</strong> Using the differences to approximate the derivative at a point.</li>
            <li><strong>Interpolation:</strong> Using the table to form interpolation formulas like Newton's and Lagrange's.</li>
        </ul>
        <p>By organizing data in this way, it becomes easier to analyze trends and make predictions based on the known data points.</p>
    `
},

{
    "title": "2.5.1. First-Order Differences",
    "content": `
        <h2>First-Order Differences</h2>
        <p>First-order differences are the simplest form of finite differences, representing the change in function values between consecutive data points. They are calculated using:</p>
        <p class="math">Δf(x<sub>i</sub>) = f(x<sub>i+1</sub>) - f(x<sub>i</sub>)</p>
        <p>Where:
        <ul>
            <li><strong>x<sub>i</sub>:</strong> The current data point.</li>
            <li><strong>x<sub>i+1</sub>:</strong> The next data point.</li>
        </ul>
        </p>
        <p>First-order differences are essential for constructing finite difference tables and play a crucial role in interpolation methods, allowing for the estimation of values between known data points.</p>
        <p>Applications of first-order differences include:</p>
        <ul>
            <li><strong>Data Analysis:</strong> Understanding the rate of change in datasets.</li>
            <li><strong>Numerical Analysis:</strong> Approximating derivatives for numerical differentiation.</li>
        </ul>
    `
},
{
    "title": "2.5.2. Higher-Order Differences",
    "content": `
        <h2>Higher-Order Differences</h2>
        <p>Higher-order differences are obtained by calculating the differences of the first-order differences. They provide a way to analyze the behavior of the function more closely and are useful in constructing interpolation formulas.</p>
        <p>The n-th order difference is defined as:</p>
        <p class="math">Δ<sup>n</sup> f(x<sub>i</sub>) = Δ(Δ<sup>n-1</sup> f(x<sub>i</sub>))</p>
        <p>Where:
        <ul>
            <li><strong>Δ<sup>n</sup> f(x<sub>i</sub>):</strong> The n-th order difference.</li>
            <li><strong>Δ<sup>n-1</sup> f(x<sub>i</sub>):</strong> The (n-1)-th order difference.</li>
        </ul>
        </p>
        <p>Higher-order differences allow for better approximations in interpolation, especially when dealing with polynomial fitting.</p>
        <p>Key applications include:</p>
        <ul>
            <li><strong>Numerical Interpolation:</strong> Enhancing the accuracy of interpolation methods, such as Newton's divided difference method.</li>
            <li><strong>Curve Fitting:</strong> Modeling complex datasets more accurately by using higher-degree polynomials.</li>
        </ul>
    `
},

{
    "title": "3. The Forward Difference Operator (E)",
    "content": `
        <h2>3.1. Definition and Significance</h2>
        <p>The forward difference operator, denoted as <strong>E</strong>, is a key concept in numerical analysis that simplifies the notation for calculating forward differences. It is defined as:</p>
        <p class="math">E[f(x)] = f(x + h) - f(x)</p>
        <p>Where:
        <ul>
            <li><strong>f(x):</strong> The function being evaluated.</li>
            <li><strong>h:</strong> The increment (the distance between points).</li>
        </ul>
        </p>
        <p>Using the forward difference operator streamlines calculations and enhances the readability of mathematical expressions in interpolation and numerical differentiation.</p>
        
        <h2>3.2. Relation between Forward Difference and E-Operator</h2>
        <p>The forward difference can be expressed in terms of the E-operator as:</p>
        <p class="math">Δf(x) = E[f(x)]</p>
        <p>This notation highlights the role of the operator in calculating differences and allows for a more systematic approach to constructing difference tables and interpolation formulas.</p>
    `
},
{
    "title": "3.3. Usage of E-Operator in Interpolation Formulas",
    "content": `
        <h2>Usage of E-Operator in Interpolation Formulas</h2>
        <p>The forward difference operator <strong>E</strong> is integral in simplifying interpolation formulas, especially in methods like Newton's forward interpolation. The operator allows us to express interpolation in a concise manner:</p>
        <p>The Newton's forward interpolation formula can be represented as:</p>
        <p class="math">P(x) = f(x_0) + \\frac{E[f(x_0)]}{1!} \\cdot (x - x_0) + \\frac{E^2[f(x_0)]}{2!} \\cdot (x - x_0)(x - x_1) + ...</p>
        <p>Where:
        <ul>
            <li><strong>P(x):</strong> The interpolated value at x.</li>
            <li><strong>E^n[f(x_0)]:</strong> The n-th forward difference evaluated at the initial point.</li>
        </ul>
        </p>
        <p>This representation allows for efficient calculation of interpolated values and is especially useful when working with large datasets or when constructing difference tables.</p>
    `
},
{
    "title": "4. Newton-Gregory Forward Difference Formula",
    "content": `
        <h2>4.1. Introduction to Forward Difference Interpolation</h2>
        <p>The Newton-Gregory forward difference formula is a method of interpolation that uses forward differences to estimate unknown values based on known data points. This method is particularly effective for datasets with equally spaced intervals.</p>

        <h2>4.2. Formula for Forward Difference Interpolation</h2>
        <p>The formula is expressed as:</p>
        <p class="math">P(x) = f(x_0) + \\frac{E[f(x_0)]}{1!} \\cdot (x - x_0) + \\frac{E^2[f(x_0)]}{2!} \\cdot (x - x_0)(x - x_1) + ... + \\frac{E^n[f(x_0)]}{n!} \\cdot (x - x_0)(x - x_1)...(x - x_{n-1})</p>
        <p>Where:
        <ul>
            <li><strong>P(x):</strong> The interpolated value at x.</li>
            <li><strong>f(x_0):</strong> The function value at the initial point.</li>
            <li><strong>E^n[f(x_0)]:</strong> The n-th forward difference evaluated at the initial point.</li>
        </ul>
        </p>

        <h2>4.3. Step-by-Step Proof of Newton-Gregory Forward Difference Formula</h2>
        <p>The proof involves showing how the formula is derived from the definition of forward differences and their relationship to Taylor's series expansion. The process is systematic, relying on the properties of finite differences.</p>
        <p>Through the derivation, the formula is shown to accurately approximate the value of the function at x by utilizing known values and their differences.</p>
    `
},
{
    "title": "4.3. Step-by-Step Proof of Newton-Gregory Forward Difference Formula",
    "content": `
        <h2>Step-by-Step Proof of Newton-Gregory Forward Difference Formula</h2>
        <p>The proof is based on Taylor's series expansion and the properties of forward differences. Here are the steps:</p>

        <h3>Step 1: Taylor's Series Expansion</h3>
        <p>Consider the Taylor series expansion of a function f(x) around a point x₀:</p>
        <p class="math">f(x) = f(x₀) + f'(x₀)(x - x₀) + \\frac{f''(x₀)}{2!}(x - x₀)^2 + ... + \\frac{f^{(n)}(x₀)}{n!}(x - x₀)^n + R_n</p>
        <p>Where R_n is the remainder term.</p>

        <h3>Step 2: Relating Derivatives to Forward Differences</h3>
        <p>We can express the derivatives in terms of forward differences:</p>
        <ul>
            <li><strong>First derivative:</strong> <br>f'(x₀) ≈ Δf(x₀)</li>
            <li><strong>Second derivative:</strong> <br>f''(x₀) ≈ Δ²f(x₀)</li>
            <li><strong>n-th derivative:</strong> <br>f^{(n)}(x₀) ≈ E^n[f(x₀)]</li>
        </ul>

        <h3>Step 3: Substituting Back into the Taylor Series</h3>
        <p>Substituting these expressions into the Taylor series gives:</p>
        <p class="math">f(x) = f(x₀) + \\frac{E[f(x₀)]}{1!}(x - x₀) + \\frac{E^2[f(x₀)]}{2!}(x - x₀)(x - x_1) + ... + \\frac{E^n[f(x₀)]}{n!}(x - x₀)(x - x_1)...(x - x_{n-1})</p>

        <h3>Step 4: Ignoring the Remainder Term</h3>
        <p>For the purpose of interpolation, we ignore the remainder term, assuming it is negligible for small h:</p>
        <p class="math">P(x) = f(x₀) + \\frac{E[f(x₀)]}{1!} \\cdot (x - x₀) + ... + \\frac{E^n[f(x₀)]}{n!} \\cdot (x - x₀)(x - x_1)...(x - x_{n-1})</p>

        <h3>Conclusion</h3>
        <p>This results in the Newton-Gregory forward difference formula for interpolating the value of f at any point x based on known function values and their differences.</p>
    `
},
{
    "title": "4.4. Worked Example for Forward Difference Interpolation",
    "content": `
        <h2>Worked Example for Forward Difference Interpolation</h2>
        <p>Let's consider a dataset with equally spaced intervals:</p>
        <table>
            <tr>
                <th>x</th>
                <th>f(x)</th>
            </tr>
            <tr>
                <td>1</td>
                <td>2</td>
            </tr>
            <tr>
                <td>2</td>
                <td>3</td>
            </tr>
            <tr>
                <td>3</td>
                <td>5</td>
            </tr>
            <tr>
                <td>4</td>
                <td>7</td>
            </tr>
        </table>

        <h3>Step 1: Calculate Forward Differences</h3>
        <p>Calculate the first and second forward differences:</p>
        <table>
            <tr>
                <th>f(x)</th>
                <th>Δf(x)</th>
                <th>Δ²f(x)</th>
            </tr>
            <tr>
                <td>2</td>
                <td>1</td>
                <td>1</td>
            </tr>
            <tr>
                <td>3</td>
                <td>2</td>
                <td></td>
            </tr>
            <tr>
                <td>5</td>
                <td>2</td>
                <td></td>
            </tr>
            <tr>
                <td>7</td>
                <td></td>
                <td></td>
            </tr>
        </table>

        <h3>Step 2: Construct the Interpolation Polynomial</h3>
        <p>Using the Newton-Gregory forward difference formula, we want to estimate f(2.5):</p>
        <p class="math">P(2.5) = f(2) + \\frac{Δf(2)}{1!} \\cdot (2.5 - 2) + \\frac{Δ²f(2)}{2!} \\cdot (2.5 - 2)(2.5 - 3)</p>
        <p>Substituting the values:</p>
        <p class="math">P(2.5) = 3 + \\frac{2}{1!} \\cdot 0.5 + \\frac{1}{2!} \\cdot (0.5)(-0.5)</p>
        <p>Calculating gives:</p>
        <p class="math">P(2.5) = 3 + 1 + \\frac{1}{4} = 4.25</p>

        <h3>Conclusion</h3>
        <p>The estimated value of f(2.5) using forward difference interpolation is approximately 4.25.</p>
        `
},
{
    title: "4.5. Applications and Advantages of Forward Interpolation",
    content: `
        <h2>Applications and Advantages of Forward Interpolation</h2>
        <p>Forward interpolation using the Newton-Gregory formula has various applications across multiple fields:</p>

        <h3>Applications</h3>
        <ul>
            <li><strong>Engineering:</strong> Used for estimating measurements and designing systems based on discrete data points.</li>
            <li><strong>Finance:</strong> Employed in predicting trends and values in stock prices or economic data.</li>
            <li><strong>Computer Graphics:</strong> Used for smooth transitions and animations by interpolating keyframes.</li>
            <li><strong>Weather Forecasting:</strong> Helps in estimating values between observed meteorological data points.</li>
        </ul>

        <h3>Advantages</h3>
        <ul>
            <li><strong>Ease of Calculation:</strong> The method is straightforward, requiring only basic operations on the dataset.</li>
            <li><strong>Accuracy:</strong> Provides reasonable accuracy for datasets with equally spaced intervals.</li>
            <li><strong>Flexibility:</strong> Can be applied to various types of datasets in different fields.</li>
            <li><strong>Systematic Approach:</strong> The use of forward differences allows for systematic organization of data in tables.</li>
        </ul>

        <p>Overall, forward interpolation is a valuable technique in numerical analysis, offering both practical applications and advantages for data estimation.</p>
    `
},
{
    "title": "5. Newton-Gregory Backward Difference Formula",
    "content": `
        <h2>5.1. Introduction to Backward Difference Interpolation</h2>
        <p>The Newton-Gregory backward difference formula is a method of interpolation that uses backward differences to estimate unknown values based on known data points. This approach is particularly effective when data points are available at the end of the interval and we want to estimate values at earlier points.</p>

        <h2>5.2. Formula for Backward Difference Interpolation</h2>
        <p>The formula is expressed as:</p>
        <p class="math">P(x) = f(x_n) + \frac{E[f(x_n)]}{1!} \cdot (x - x_n) + \frac{E^2[f(x_n)]}{2!} \cdot (x - x_n)(x - x_{n-1}) + \ldots + \frac{E^n[f(x_n)]}{n!} \cdot (x - x_n)(x - x_{n-1}) \ldots (x - x_{n-n})</p>
        <p>Where:
        <ul>
            <li><strong>P(x):</strong> The interpolated value at x.</li>
            <li><strong>f(x_n):</strong> The function value at the last point.</li>
            <li><strong>E^n[f(x_n)]:</strong> The n-th backward difference evaluated at the last point.</li>
        </ul>
        </p>

        <h2>5.3. Step-by-Step Proof of Newton-Gregory Backward Difference Formula</h2>
        <p>The proof involves similar steps as the forward difference formula, utilizing Taylor's series expansion and expressing derivatives in terms of backward differences. The focus is on establishing the relationship between the values of the function at known points and their backward differences.</p>
    `
},

{
    "title": "5.3. Step-by-Step Proof of Newton-Gregory Backward Difference Formula",
    "content": `
        <h2>Step-by-Step Proof of Newton-Gregory Backward Difference Formula</h2>
        <p>The proof is based on Taylor's series expansion and the properties of backward differences. Here are the steps:</p>

        <h3>Step 1: Taylor's Series Expansion</h3>
        <p>Consider the Taylor series expansion of a function f(x) around the last point xₙ:</p>
        <p class="math">f(x) = f(x_n) + f'(x_n)(x - x_n) + \frac{f''(x_n)}{2!}(x - x_n)^2 + \ldots + \frac{f^{(n)}(x_n)}{n!}(x - x_n)^n + R_n</p>
        <p>Where R_n is the remainder term.</p>

        <h3>Step 2: Relating Derivatives to Backward Differences</h3>
        <p>We can express the derivatives in terms of backward differences:</p>
        <ul>
            <li><strong>First derivative:</strong> <br>f'(x_n) \approx -\Delta f(x_n)</li>
            <li><strong>Second derivative:</strong> <br>f''(x_n) \approx -\Delta^2 f(x_n)</li>
            <li><strong>n-th derivative:</strong> <br>f^{(n)}(x_n) \approx -E^n[f(x_n)]</li>
        </ul>

        <h3>Step 3: Substituting Back into the Taylor Series</h3>
        <p>Substituting these expressions into the Taylor series gives:</p>
        <p class="math">f(x) = f(x_n) - \frac{E[f(x_n)]}{1!}(x_n - x) - \frac{E^2[f(x_n)]}{2!}(x_n - x)(x_n - x_{n-1}) - \ldots - \frac{E^n[f(x_n)]}{n!}(x_n - x)(x_n - x_{n-1}) \ldots (x_n - x_{n-n})</p>

        <h3>Step 4: Ignoring the Remainder Term</h3>
        <p>For the purpose of interpolation, we ignore the remainder term, assuming it is negligible for small (x_n - x):</p>
        <p class="math">P(x) = f(x_n) - \frac{E[f(x_n)]}{1!}(x_n - x) - \ldots - \frac{E^n[f(x_n)]}{n!}(x_n - x)(x_n - x_{n-1}) \ldots (x_n - x_{n-n})</p>

        <h3>Conclusion</h3>
        <p>This results in the Newton-Gregory backward difference formula for interpolating the value of f at any point x based on known function values and their backward differences.</p>
    `
},

{
    "title": "5.4. Worked Example for Backward Difference Interpolation",
    "content": `
        <h2>Worked Example for Backward Difference Interpolation</h2>
        <p>Let's consider a dataset with equally spaced intervals:</p>
        <table>
            <tr>
                <th>x</th>
                <th>f(x)</th>
            </tr>
            <tr>
                <td>4</td>
                <td>7</td>
            </tr>
            <tr>
                <td>3</td>
                <td>5</td>
            </tr>
            <tr>
                <td>2</td>
                <td>3</td>
            </tr>
            <tr>
                <td>1</td>
                <td>2</td>
            </tr>
        </table>

        <h3>Step 1: Calculate Backward Differences</h3>
        <p>Calculate the first and second backward differences:</p>
        <table>
            <tr>
                <th>f(x)</th>
                <th>\(\Delta f(x)\)</th>
                <th>\(\Delta^2 f(x)\)</th>
            </tr>
            <tr>
                <td>7</td>
                <td>-2</td>
                <td>-1</td>
            </tr>
            <tr>
                <td>5</td>
                <td>-2</td>
                <td></td>
            </tr>
            <tr>
                <td>3</td>
                <td>-1</td>
                <td></td>
            </tr>
            <tr>
                <td>2</td>
                <td></td>
                <td></td>
            </tr>
        </table>

        <h3>Step 2: Construct the Interpolation Polynomial</h3>
        <p>Using the Newton-Gregory backward difference formula, we want to estimate f(2.5):</p>
        <p class="math">P(2.5) = f(3) + \frac{E[f(3)]}{1!} \cdot (2.5 - 3) + \frac{E^2[f(3)]}{2!} \cdot (2.5 - 3)(2.5 - 2)</p>
        <p>Substituting the values:</p>
        <p class="math">P(2.5) = 5 + \frac{-2}{1!} \cdot (-0.5) + \frac{-1}{2!} \cdot (-0.5)(0.5)</p>
        <p>Calculating gives:</p>
        <p class="math">P(2.5) = 5 + 1 - \frac{1}{4} = 5 - 0.25 = 4.75</p>

        <h3>Conclusion</h3>
        <p>The estimated value of f(2.5) using backward difference interpolation is approximately 4.75.</p>
    `
},
{
    title: "5.5. Applications and Advantages of Backward Interpolation",
    content: `
        <h2>Applications and Advantages of Backward Interpolation</h2>
        <p>The backward interpolation using the Newton-Gregory formula has various applications across multiple fields:</p>

        <h3>Applications</h3>
        <ul>
            <li><strong>Data Analysis:</strong> Useful for estimating values at earlier points in time based on recent data.</li>
            <li><strong>Physics:</strong> Helps in predicting values in experiments where measurements are taken at the end of a process.</li>
            <li><strong>Computer Science:</strong> Utilized in algorithms for graphics rendering where previous states are required for calculations.</li>
            <li><strong>Economics:</strong> Employed in analyzing past trends and forecasting future economic conditions based on recent observations.</li>
        </ul>

        <h3>Advantages</h3>
        <ul>
            <li><strong>Ease of Use:</strong> The method is straightforward and can be applied easily to datasets.</li>
            <li><strong>Backward Focus:</strong> Particularly beneficial when the known data points are more reliable than those at the beginning of the interval.</li>
            <li><strong>Systematic Approach:</strong> Like forward differences, backward differences allow for organized data representation in tables.</li>
            <li><strong>Flexibility:</strong> Can be applied to various datasets and is adaptable to different contexts.</li>
        </ul>

        <p>Overall, backward interpolation is a valuable technique in numerical analysis, providing practical applications and advantages for estimating earlier data points.</p>
    `
},

{
    title: "6. Comparison of Forward and Backward Difference Methods",
    content: `
        <h2>Comparison of Forward and Backward Difference Methods</h2>
        <p>Both forward and backward difference methods are valuable for interpolation, but they have distinct characteristics and use cases. Here’s a comparison:</p>

        <h3>When to Use Forward Difference</h3>
        <ul>
            <li>When you have data points available at the start of the interval and want to estimate values at subsequent points.</li>
            <li>Useful in scenarios where the data trends upward or the focus is on later points in time.</li>
            <li>Preferred for extrapolation when you want to predict future values based on the most recent data.</li>
        </ul>

        <h3>When to Use Backward Difference</h3>
        <ul>
            <li>Ideal when the known data points are more reliable at the end of the interval, and you wish to estimate earlier values.</li>
            <li>Useful in scenarios where past trends are more important for analysis, such as in economic forecasting.</li>
            <li>Better suited for interpolation in data sets where observations have greater significance towards the end.</li>
        </ul>

        <h3>Accuracy and Limitations</h3>
        <ul>
            <li><strong>Accuracy:</strong> Both methods can provide accurate estimates, but their effectiveness depends on the nature of the data.</li>
            <li><strong>Limitations:</strong> Both methods may become less accurate with large intervals between data points or non-linear trends.</li>
        </ul>

        <p>Ultimately, the choice between forward and backward difference methods depends on the specific context of the data and the requirements of the analysis.</p>
    `
},

{
    title: "7.1. Problem on Forward Difference Interpolation",
    content: `
        <h2>Problem on Forward Difference Interpolation</h2>
        <p>Given the following data points:</p>
        <table>
            <tr>
                <th>x</th>
                <th>f(x)</th>
            </tr>
            <tr>
                <td>0</td>
                <td>1</td>
            </tr>
            <tr>
                <td>1</td>
                <td>2</td>
            </tr>
            <tr>
                <td>2</td>
                <td>4</td>
            </tr>
            <tr>
                <td>3</td>
                <td>8</td>
            </tr>
        </table>
        <p>Estimate the value of f(1.5) using forward difference interpolation.</p>

        <h3>Step 1: Calculate Forward Differences</h3>
        <table>
            <tr>
                <th>f(x)</th>
                <th>Δf(x)</th>
                <th>Δ²f(x)</th>
            </tr>
            <tr>
                <td>1</td>
                <td>1</td>
                <td>1</td>
            </tr>
            <tr>
                <td>2</td>
                <td>2</td>
                <td></td>
            </tr>
            <tr>
                <td>4</td>
                <td>4</td>
                <td></td>
            </tr>
            <tr>
                <td>8</td>
                <td></td>
                <td></td>
            </tr>
        </table>

        <h3>Step 2: Construct the Interpolation Polynomial</h3>
        <p>Using the Newton-Gregory forward difference formula, we want to estimate f(1.5):</p>
        <p class="math">P(1.5) = f(1) + \frac{Δf(1)}{1!} \cdot (1.5 - 1) + \frac{Δ²f(1)}{2!} \cdot (1.5 - 1)(1.5 - 2)</p>
        <p>Substituting the values:</p>
        <p class="math">P(1.5) = 2 + \frac{2}{1!} \cdot 0.5 + \frac{1}{2!} \cdot (0.5)(-0.5)</p>
        <p>Calculating gives:</p>
        <p class="math">P(1.5) = 2 + 1 + \frac{-0.25}{2} = 2 + 1 - 0.125 = 2.875</p>

        <h3>Conclusion</h3>
        <p>The estimated value of f(1.5) using forward difference interpolation is approximately 2.875.</p>
    `
},

{
    title: "7.2. Problem on Backward Difference Interpolation",
    content: `
        <h2>Problem on Backward Difference Interpolation</h2>
        <p>Given the following data points:</p>
        <table>
            <tr>
                <th>x</th>
                <th>f(x)</th>
            </tr>
            <tr>
                <td>5</td>
                <td>25</td>
            </tr>
            <tr>
                <td>4</td>
                <td>16</td>
            </tr>
            <tr>
                <td>3</td>
                <td>9</td>
            </tr>
            <tr>
                <td>2</td>
                <td>4</td>
            </tr>
        </table>
        <p>Estimate the value of f(3.5) using backward difference interpolation.</p>

        <h3>Step 1: Calculate Backward Differences</h3>
        <table>
            <tr>
                <th>f(x)</th>
                <th>Δf(x)</th>
                <th>Δ²f(x)</th>
            </tr>
            <tr>
                <td>25</td>
                <td>-9</td>
                <td>0</td>
            </tr>
            <tr>
                <td>16</td>
                <td>-7</td>
                <td></td>
            </tr>
            <tr>
                <td>9</td>
                <td>-5</td>
                <td></td>
            </tr>
            <tr>
                <td>4</td>
                <td></td>
                <td></td>
            </tr>
        </table>

        <h3>Step 2: Construct the Interpolation Polynomial</h3>
        <p>Using the Newton-Gregory backward difference formula, we want to estimate f(3.5):</p>
        <p class="math">P(3.5) = f(4) + \frac{E[f(4)]}{1!} \cdot (3.5 - 4) + \frac{E^2[f(4)]}{2!} \cdot (3.5 - 4)(3.5 - 3)</p>
        <p>Substituting the values:</p>
        <p class="math">P(3.5) = 16 + \frac{-7}{1!} \cdot (-0.5) + \frac{0}{2!} \cdot (-0.5)(0.5)</p>
        <p>Calculating gives:</p>
        <p class="math">P(3.5) = 16 + 3.5 + 0 = 19.5</p>

        <h3>Conclusion</h3>
        <p>The estimated value of f(3.5) using backward difference interpolation is approximately 19.5.</p>
    `
},

{
    title: "8. Extensions to Central Differences and Other Methods",
    content: `
        <h2>Extensions to Central Differences and Other Methods</h2>
        <p>Central differences and other interpolation methods provide additional approaches for estimating values. Here’s an overview:</p>

        <h3>8.1. Central Difference Formula</h3>
        <p>The central difference method uses data points on both sides of the point of interest, providing a potentially more accurate estimate:</p>
        <p class="math">f(x) \approx f(x_0) + \frac{h}{2} \cdot f'(x_0) + \frac{h^2}{8} \cdot f''(x_0) + ...</p>
        <p>Where h is the spacing between points.</p>

        <h3>8.2. Derivation of Central Difference Formula</h3>
        <p>The central difference formula is derived using Taylor's series expansion for points around x:</p>
        <p class="math">f(x) = f(x_0) + \frac{h}{2}f'(x_0) + \frac{h^2}{8}f''(x_0) + ... - \text{Remainder}</p>
        <p>The formula is symmetrical, giving it an edge in accuracy for certain functions.</p>

        <h3>8.3. Other Interpolation Methods and Comparisons</h3>
        <ul>
            <li><strong>Lagrange Interpolation:</strong> Uses polynomial fitting through all known data points.</li>
            <li><strong>Newton's Divided Difference:</strong> A form of polynomial interpolation that can handle unevenly spaced data points.</li>
            <li><strong>Spline Interpolation:</strong> Uses piecewise polynomials to achieve smooth curves between data points.</li>
        </ul>
        <p>Each method has its own advantages and use cases depending on the nature of the data and the required accuracy.</p>

        <h3>Conclusion</h3>
        <p>Understanding these methods allows for flexibility in selecting the appropriate interpolation technique based on data characteristics and analysis needs.</p>
    `
},

{
    title: "Appendix",
    content: `
        <h2>Appendix</h2>
        <h3>A.1. List of Formulas for Finite Differences and Interpolation</h3>
        <ul>
    <li><strong>Forward Difference:</strong> \( \Delta f(x) = f(x + h) - f(x) \)</li>
    <li><strong>Backward Difference:</strong> \( \Delta f(x) = f(x) - f(x - h) \)</li>
    <li><strong>Central Difference:</strong> \( \Delta f(x) = f\left(x + \frac{h}{2}\right) - f\left(x - \frac{h}{2}\right) \)</li>
    <li><strong>Newton-Gregory Forward Difference Formula:</strong> 
        \( P(x) = f(x_0) + \frac{\Delta f(x_0)}{1!}(x - x_0) + \frac{\Delta^2 f(x_0)}{2!}(x - x_0)(x - x_1) + \ldots \)
    </li>
    <li><strong>Newton-Gregory Backward Difference Formula:</strong> 
        \( P(x) = f(x_n) + \frac{E[f(x_n)]}{1!}(x - x_n) + \frac{E^2[f(x_n)]}{2!}(x - x_n)(x - x_{n-1}) + \ldots \)
    </li>
</ul>


        <h3>A.2. Table of Common Forward and Backward Differences</h3>
        <table>
            <tr>
                <th>Order</th>
                <th>Forward Difference</th>
                <th>Backward Difference</th>
            </tr>
            <tr>
                <td>1st</td>
                <td>Δf(x) = f(x + h) - f(x)</td>
                <td>Δf(x) = f(x) - f(x - h)</td>
            </tr>
            <tr>
                <td>2nd</td>
                <td>Δ²f(x) = Δf(x + h) - Δf(x)</td>
                <td>Δ²f(x) = Δf(x) - Δf(x - h)</td>
            </tr>
            <tr>
                <td>3rd</td>
                <td>Δ³f(x) = Δ²f(x + h) - Δ²f(x)</td>
                <td>Δ³f(x) = Δ²f(x) - Δ²f(x - h)</td>
            </tr>
        </table>

        <p>This appendix provides a quick reference to essential formulas and differences for finite differences and interpolation methods.</p>
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
    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}

function updateSlides() {
    const allSlides = document.querySelectorAll('.slide');
    allSlides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - currentSlide)}%)`;
    });
    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
}

function nextSlide() {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        updateSlides();
        saveDrawing();
        clearCanvas();
        loadDrawing();
        MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
    }
}

function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
        updateSlides();
        saveDrawing();
        clearCanvas();
        loadDrawing();
        MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
    }
}

function goToSlide(index) {
    if (index >= 0 && index < slides.length) {
        currentSlide = index;
        updateSlides();
        saveDrawing();
        clearCanvas();
        loadDrawing();
        MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
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
