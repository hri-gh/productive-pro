"use client"

import * as React from "react"
import { Check, ChevronsUpDown, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Badge } from "@/components/ui/badge"

export interface Option {
    value: string
    label: string
}

interface MultiSelectComboboxProps {
    options?: Option[]
    placeholder?: string
    emptyMessage?: string
    onSelectionChange?: (selectedValues: string[]) => void
}

export function MultiSelectCombobox({
    options = [],
    placeholder = "Select options...",
    emptyMessage = "No option found.",
    onSelectionChange,
}: MultiSelectComboboxProps) {
    const [open, setOpen] = React.useState(false)
    const [selectedValues, setSelectedValues] = React.useState<string[]>([])

    const handleSelect = (currentValue: string) => {
        const newSelectedValues = selectedValues.includes(currentValue)
            ? selectedValues.filter((value) => value !== currentValue)
            : [...selectedValues, currentValue]
        setSelectedValues(newSelectedValues)
        onSelectionChange?.(newSelectedValues)
    }

    const handleRemove = (valueToRemove: string) => {
        const newSelectedValues = selectedValues.filter((value) => value !== valueToRemove)
        setSelectedValues(newSelectedValues)
        onSelectionChange?.(newSelectedValues)
    }

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full justify-between"
                >
                    {selectedValues.length > 0 ? (
                        <div className="flex flex-wrap gap-1 max-w-[calc(100%-2rem)] overflow-hidden">
                            {selectedValues.map((value) => (
                                <Badge key={value} variant="secondary" className="mr-1">
                                    {options.find((option) => option.value === value)?.label || value}
                                    <button
                                        className="ml-1 ring-offset-background rounded-full outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") {
                                                handleRemove(value)
                                            }
                                        }}
                                        onMouseDown={(e) => {
                                            e.preventDefault()
                                            e.stopPropagation()
                                        }}
                                        onClick={() => handleRemove(value)}
                                    >
                                        <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
                                    </button>
                                </Badge>
                            ))}
                        </div>
                    ) : (
                        placeholder
                    )}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
                <Command>
                    <CommandInput placeholder={`Search ${placeholder.toLowerCase()}...`} />
                    <CommandList>
                        <CommandEmpty>{emptyMessage}</CommandEmpty>
                        <CommandGroup>
                            {options.map((option) => (
                                <CommandItem
                                    key={option.value}
                                    value={option.value}
                                    onSelect={handleSelect}
                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            selectedValues.includes(option.value) ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    {option.label}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
