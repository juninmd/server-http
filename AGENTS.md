```markdown
# AGENTS.md File Guidelines

These guidelines are designed to ensure consistent, maintainable, and high-quality development for the AGENTS repository. Adherence to these principles is mandatory.

## 1. DRY (Don't Repeat Yourself)

*   All logic, data structures, and API endpoints should be defined and reused across multiple files and components.
*   Avoid duplicating code.  When a similar logic needs to be implemented, create a reusable component.
*   Favor composition over inheritance to minimize code duplication.

## 2. KISS (Keep It Simple, Stupid)

*   Strive for minimal code complexity.  Each function and class should have a single, well-defined purpose.
*   Prioritize readability and understandability.  Use clear variable names and comments where necessary.
*   Avoid unnecessary abstractions.  Keep the underlying implementation as simple as possible.

## 3. SOLID Principles

*   **Single Responsibility Principle:** Each class/component should have a single, well-defined responsibility.
*   **Open/Closed Principle:** The system should be extensible through provided abstractions without modifying the core implementation.
*   **Liskov Substitution Principle:**  Subclasses should be substitutable for their base classes without altering the correctness of the program.
*   **Interface Segregation Principle:** Each interface should define only the methods that its clients actually require.
*   **Dependency Inversion Principle:**  High-level modules (classes) should be dependent on low-level modules (interfaces), not each other.

## 4. YAGNI (You Aren't Gonna Need It)

*   Implement only the functionality that is currently required.  Don't add features or logic that is not immediately needed.
*   Refactor code to remove obsolete functionality before it's removed.
*   Avoid unnecessary complexity or implementation.

## 5. Development Process

*   All code must be written to be productive.  Don't use mocks for testing.
*   Prioritize writing unit tests to verify functionality.
*   Address code review requests immediately.
*   Implement thorough test coverage.  Automated testing is critical.
*   Code reviews are mandatory before committing any changes.
*   Use linters and style guides to maintain code consistency.

## 6. File Structure and Code Standards

*   Each file should have a clear, descriptive name.
*   File names should follow a consistent naming convention (e.g., `[module_name]_[component_name].py`).
*   Use consistent indentation and spacing.
*   Document code with comments and docstrings explaining complex logic or functions.
*   Include a brief README in each file explaining its purpose.
*   Data formats should be standardized.
*   Consider using a code formatter (e.g., black) for consistent style.
*   Keep the maximum code length at 180 lines.

## 7. Test Coverage Requirements

*   Minimum test coverage: 85%
*   Test cases should cover all significant code paths and edge cases.
*   Test data should be representative of real-world scenarios.
*   Automated tests should be integrated into the CI/CD pipeline.
*   Focus on testing key functionalities.

## 8. Code Constraints

*   Maximum code length: 180 lines.
*   All code must be validated for syntactical and semantic correctness before submission.

## 9.  Specific Considerations for AGENTS.md

*   Clearly define API endpoints for each component.
*   Document each component's purpose, inputs, and outputs.
*   Include unit tests for all core components.
*   Provide clear error handling strategies.
*   Consider the potential for future expansion and modularity.

## 10.  Commit Conventions

*   All commits should be accompanied by a clear commit message.
*   Use a consistent commit message format.
*   Make commits small and focused.

These guidelines are a framework.  Adapt them as needed to fit the specific requirements of the AGENTS project and development team.
```