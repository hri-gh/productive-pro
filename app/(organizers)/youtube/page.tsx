import { Youtube } from 'lucide-react'
import React from 'react'
import CategorySidebar from '@/components/organizers/youtube/category-sidebar'
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"

const page = () => {
    return (
        <>
            <div className="container mx-auto p-4 h-screen flex flex-col bg-background text-foreground dark">
                <h1 className="text-3xl font-bold mb-6 text-primary flex items-center gap-2">
                    <Youtube className="h-8 w-8" />
                    YouTube Channel Organizer
                </h1>
                <ResizablePanelGroup
                    direction="horizontal"
                    className="min-h-[200px] rounded-lg border md:min-w-[450px]"
                >

                    <ResizablePanel defaultSize={15}>
                        <CategorySidebar />
                    </ResizablePanel>

                    <ResizableHandle withHandle />

                    <ResizablePanel defaultSize={75}>
                        <div className="flex h-full items-center justify-center p-6">
                            <span className="font-semibold">Content</span>
                        </div>
                    </ResizablePanel>
                </ResizablePanelGroup>

            </div>
        </>
    )
}

export default page
