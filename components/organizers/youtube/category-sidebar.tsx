import React from 'react'


import AddCategoryForm from './add-category-form'

import CategorySearchBar from './category-search-bar'
import CategoryList from './category-list'

const CategorySidebar = () => {
    return (
        <>
            <div className=" bg-slate-500 flex flex-grow overflow-hidden bg-card shadow-lg">
                <div className="w-64 ">
                    <div className="p-4">
                        <CategorySearchBar />
                        <AddCategoryForm />
                    </div>
                    <CategoryList />
                </div>
            </div>
        </>
    )
}

export default CategorySidebar
