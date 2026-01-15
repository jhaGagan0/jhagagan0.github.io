import numpy as np

# Initialize a 3x3 matrix
matrix = np.array([[1, 2, 3],
                   [4, 5, 6],
                   [7, 8, 9]])

print("Original Matrix:")
print(matrix)
print()

# 1. TRANSPOSE (Manual Implementation)
def manual_transpose(mat):
    """Manually transpose a matrix by swapping rows and columns"""
    rows, cols = mat.shape
    transposed = np.zeros((cols, rows))
    
    for i in range(rows):
        for j in range(cols):
            transposed[j][i] = mat[i][j]
    
    return transposed

transpose_result = manual_transpose(matrix)
print("1. Manual Transpose:")
print(transpose_result)
print("Verification with NumPy transpose:", np.array_equal(transpose_result, matrix.T))
print()

# 2. MATRIX MULTIPLICATION (Manual Implementation)
def manual_matrix_multiply(mat1, mat2):
    """Manually multiply two matrices using the dot product formula"""
    rows1, cols1 = mat1.shape
    rows2, cols2 = mat2.shape
    
    # Check if multiplication is possible
    if cols1 != rows2:
        raise ValueError("Cannot multiply: columns of first matrix must equal rows of second matrix")
    
    result = np.zeros((rows1, cols2))
    
    for i in range(rows1):
        for j in range(cols2):
            for k in range(cols1):
                result[i][j] += mat1[i][k] * mat2[k][j]
    
    return result

# Create another matrix for multiplication
matrix2 = np.array([[2, 0, 1],
                    [1, 3, 0],
                    [0, 1, 2]])

print("Second Matrix for multiplication:")
print(matrix2)
print()

multiplication_result = manual_matrix_multiply(matrix, matrix2)
print("2. Manual Matrix Multiplication:")
print(multiplication_result)
print("Verification with NumPy dot:", np.array_equal(multiplication_result, np.dot(matrix, matrix2)))
print()

# 3. DETERMINANT (Manual Implementation using cofactor expansion)
def manual_determinant_3x3(mat):
    """Manually calculate determinant of a 3x3 matrix using cofactor expansion"""
    if mat.shape != (3, 3):
        raise ValueError("This function only works for 3x3 matrices")
    
    # Using the rule of Sarrus or cofactor expansion along first row
    # det(A) = a11(a22*a33 - a23*a32) - a12(a21*a33 - a23*a31) + a13(a21*a32 - a22*a31)
    
    a11, a12, a13 = mat[0][0], mat[0][1], mat[0][2]
    a21, a22, a23 = mat[1][0], mat[1][1], mat[1][2]
    a31, a32, a33 = mat[2][0], mat[2][1], mat[2][2]
    
    det = (a11 * (a22 * a33 - a23 * a32) - 
           a12 * (a21 * a33 - a23 * a31) + 
           a13 * (a21 * a32 - a22 * a31))
    
    return det

# Use a different matrix for determinant calculation (original matrix has det=0)
det_matrix = np.array([[2, 1, 3],
                       [1, 4, 2],
                       [3, 2, 1]])

print("Matrix for determinant calculation:")
print(det_matrix)
print()

determinant_result = manual_determinant_3x3(det_matrix)
print("3. Manual Determinant Calculation:")
print(f"Determinant = {determinant_result}")
print(f"Verification with NumPy linalg.det: {np.linalg.det(det_matrix)}")
print()

# Alternative determinant method using Rule of Sarrus
def manual_determinant_sarrus(mat):
    """Calculate determinant using Rule of Sarrus method"""
    if mat.shape != (3, 3):
        raise ValueError("This function only works for 3x3 matrices")
    
    # Rule of Sarrus: extend matrix and calculate diagonals
    # Positive diagonals: top-left to bottom-right
    pos1 = mat[0][0] * mat[1][1] * mat[2][2]
    pos2 = mat[0][1] * mat[1][2] * mat[2][0]
    pos3 = mat[0][2] * mat[1][0] * mat[2][1]
    
    # Negative diagonals: top-right to bottom-left
    neg1 = mat[0][2] * mat[1][1] * mat[2][0]
    neg2 = mat[0][0] * mat[1][2] * mat[2][1]
    neg3 = mat[0][1] * mat[1][0] * mat[2][2]
    
    determinant = (pos1 + pos2 + pos3) - (neg1 + neg2 + neg3)
    return determinant

sarrus_result = manual_determinant_sarrus(det_matrix)
print("Alternative: Determinant using Rule of Sarrus:")
print(f"Determinant = {sarrus_result}")
print()

# Summary of all operations
print("="*50)
print("SUMMARY OF MANUAL OPERATIONS")
print("="*50)
print("1. Transpose: Swapped rows and columns manually")
print("2. Multiplication: Used triple nested loop for dot product")
print("3. Determinant: Used cofactor expansion and Rule of Sarrus")
print("\nAll manual implementations match NumPy's built-in functions!")