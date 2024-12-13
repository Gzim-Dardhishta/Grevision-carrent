import React from "react";

interface PaginationProps {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, currentPage, onPageChange }) => {
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="flex items-center justify-center space-x-2 mt-10">
            <button
                className={`px-4 py-2 border rounded ${currentPage === 1 ? "text-gray-300 cursor-not-allowed" : "hover:bg-gray-100"
                    }`}
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
            >
                &laquo;
            </button>

            {pageNumbers.map((number) =>
                number <= 3 || number === totalPages ? (
                    <button
                        key={number}
                        className={`px-4 py-2 border rounded ${currentPage === number
                            ? "bg-red-700 text-white"
                            : "hover:bg-gray-100"
                            }`}
                        onClick={() => onPageChange(number)}
                    >
                        {number}
                    </button>
                ) : number === 4 ? (
                    <span key={number} className="px-3 py-2">...</span>
                ) : null
            )}

            <button
                className={`px-4 py-2 border rounded ${currentPage === totalPages ? "text-gray-300 cursor-not-allowed" : "hover:bg-gray-100"
                    }`}
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
            >
                &raquo;
            </button>
        </div>
    );
};

export default Pagination;
