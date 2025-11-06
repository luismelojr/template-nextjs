"use client";

import { forwardRef, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { FieldError } from "react-hook-form";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: FieldError;
  helperText?: string;
  labelAction?: React.ReactNode;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ label, error, helperText, labelAction, type = "text", id, className = "", ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === "password";
    const inputType = isPassword && showPassword ? "text" : type;
    const inputId = id || label.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor={inputId}>{label}</Label>
          {labelAction}
        </div>
        <div className="relative">
          <Input
            id={inputId}
            type={inputType}
            ref={ref}
            className={`h-11 ${isPassword ? "pr-10" : ""} ${className} ${
              error ? "border-red-600" : ""
            }`}
            {...props}
          />
          {isPassword && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              tabIndex={-1}
            >
              {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
            </button>
          )}
        </div>
        {error && <p className="text-xs text-red-600">{error.message}</p>}
        {!error && helperText && <p className="text-xs text-muted-foreground">{helperText}</p>}
      </div>
    );
  }
);

TextInput.displayName = "TextInput";
