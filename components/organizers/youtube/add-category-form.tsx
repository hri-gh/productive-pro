import React from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { PlusCircle } from 'lucide-react'

const AddCategoryForm = () => {
    return (
        <>
            <Label htmlFor="newCategory" className="text-sm font-medium text-muted-foreground">New Category</Label>
            <div className="flex gap-2 mt-1">
                <Input
                    id="newCategory"
                    placeholder="Category name"
                    className="flex-grow"
                />
                <Button size="icon" variant="outline">
                    <PlusCircle className="h-4 w-4" />
                </Button>
            </div>
        </>
    )
}

export default AddCategoryForm
