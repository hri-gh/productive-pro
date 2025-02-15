import React from 'react'
import { Label } from '@radix-ui/react-label'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'

const CategorySearchBar = () => {
    return (
        <>
            <Label htmlFor="categorySearch" className="text-sm font-medium text-muted-foreground">Search Categories</Label>
            <div className="flex items-center mt-1 mb-4">
                <Search className="h-4 w-4 absolute ml-2 text-muted-foreground" />
                <Input
                    placeholder="Search..."
                    className="pl-8"
                />
            </div>
        </>
    )
}

export default CategorySearchBar
