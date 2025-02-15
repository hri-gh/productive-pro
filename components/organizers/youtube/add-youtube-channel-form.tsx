import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from '@/components/ui/button'

const AddYoutubeChannelForm = () => {
    return (
        <>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Add New Channel</h2>
            <Card className="mb-4">
                <CardContent className="pt-6">
                    <div className="flex flex-col gap-2">
                        <Input
                            placeholder="Enter channel URL..."
                            className="flex-grow text-lg"
                        />
                        <div className="flex items-center gap-2">
                            <Select >
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select Category" />
                                </SelectTrigger>
                                <SelectContent>

                                </SelectContent>
                            </Select>
                            <Button variant="default">
                                Add Channel
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}

export default AddYoutubeChannelForm
