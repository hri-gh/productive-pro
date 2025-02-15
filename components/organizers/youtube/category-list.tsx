import React from 'react'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Home } from 'lucide-react'

const CategoryList = () => {
    return (
        <>
            <ScrollArea className="h-[calc(100vh-16rem)]">
                <div className="p-2">
                    <Button

                        className="w-full justify-start mb-1 text-left"
                    >
                        <Home className="h-4 w-4 mr-2" />
                        Home
                    </Button>

                    <Button
                        className="w-full justify-start mb-1 text-left"

                    >
                        Category
                    </Button>
                </div>
            </ScrollArea>
        </>
    )
}

export default CategoryList
