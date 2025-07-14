"use client"

import { useForm } from "react-hook-form"
import { useState } from "react"
import {  X } from "lucide-react"
import InputField from "../helper/input-helper/InputField"
import SelectField from "../helper/select-helper/SelectField"
import PageLayout from "../layout/PageLayout"

const ApplyJob = () => {
    const [uploadedFile, setUploadedFile] = useState(null)

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm()

    // Options for dropdowns
    const applyingForOptions = [
        { value: "lawyer", label: "Lawyer" },
        { value: "paralegal", label: "Paralegal" },
        { value: "legal-assistant", label: "Legal Assistant" },
        { value: "intern", label: "Intern" },
        { value: "other", label: "Other" },
    ]

    const countryOptions = [
        { value: "qatar", label: "Qatar" },
        { value: "uae", label: "UAE" },
        { value: "saudi-arabia", label: "Saudi Arabia" },
        { value: "kuwait", label: "Kuwait" },
        { value: "bahrain", label: "Bahrain" },
        { value: "oman", label: "Oman" },
        { value: "other", label: "Other" },
    ]

    const onSubmit = (data) => {
        console.log("Form submitted:", data)
        console.log("Uploaded file:", uploadedFile)
        // Handle form submission here
    }

    const handleFileUpload = (event) => {
        const file = event.target.files[0]
        if (file) {
            setUploadedFile(file)
        }
    }

    const removeFile = () => {
        setUploadedFile(null)
        // Reset file input
        const fileInput = document.getElementById("cv")
        if (fileInput) {
            fileInput.value = ""
        }
    }

    const handleCancel = () => {
        reset()
        setUploadedFile(null)
    }

    return (
        <div className="bg-bg-primary min-h-screen py-16 px-4">
            <PageLayout>
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-poltawski font-semibold text-text-title mb-4 md:mb-6">Apply for a Job or Internship</h1>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Left Column */}
                        <div className="space-y-6">
                            {/* Full Name */}
                            <InputField
                                label="Full Name"
                                name="fullName"
                                register={register}
                                placeholder="Enter your full name"
                                required={true}
                                error={errors.fullName}
                            />

                            {/* Email */}
                            <InputField
                                label="Email"
                                name="email"
                                type="email"
                                register={register}
                                placeholder="Enter your email"
                                required={true}
                                error={errors.email}
                            />

                            {/* Applying For - Using Custom SelectField */}
                            <SelectField
                                label="Applying For"
                                name="applyingFor"
                                options={applyingForOptions}
                                register={register}
                                required={true}
                                defaultOption="Select position"
                                error={errors.applyingFor}
                            />
                        </div>

                        {/* Right Column */}
                        <div className="space-y-6">
                            {/* Phone Number */}
                            <InputField
                                label="Phone Number"
                                name="phoneNumber"
                                type="tel"
                                register={register}
                                placeholder="Enter your phone number"
                                required={true}
                                error={errors.phoneNumber}
                            />

                            {/* Country - Using Custom SelectField */}
                            <SelectField
                                label="Country"
                                name="country"
                                options={countryOptions}
                                register={register}
                                required={true}
                                defaultOption="Select country"
                                error={errors.country}
                            />

                            {/* Upload CV */}
                            <div className="space-y-1 w-full">
                                <label htmlFor="cv" className="block text-xs text-gray-600">
                                    Upload your CV
                                </label>
                                <div className="flex gap-2">
                                    <div className="flex-1 relative">
                                        {uploadedFile ? (
                                            <div className="w-full border border-gray-300 px-2 py-1 rounded-sm text-xs bg-white flex items-center justify-between">
                                                <span className="text-gray-700">{uploadedFile.name}</span>
                                                <button type="button" onClick={removeFile} className="text-gray-500 hover:text-red-500 ml-2">
                                                    <X className="w-4 h-4" />
                                                </button>
                                            </div>
                                        ) : (
                                            <input
                                                id="cv"
                                                type="file"
                                                accept=".pdf,.doc,.docx"
                                                onChange={handleFileUpload}
                                                className="w-full border border-gray-300 focus:outline-none focus:ring-1 focus:ring-btn-bg px-2 py-1 rounded-sm text-xs placeholder:text-xs outline-none transition-all duration-300 file:rounded-sm file:border-0 file:bg-btn-bg/30 file:text-gray-800 file:text-xs file:py-1 file:px-3"
                                            />
                                        )}
                                    </div>
                                    {!uploadedFile && (
                                        <button
                                            type="button"
                                            onClick={() => document.getElementById("cv").click()}
                                            className="px-4 py-2 bg-btn-bg text-white text-xs font-medium rounded-sm hover:bg-btn-bg/90 transition-colors cursor-pointer"
                                        >
                                            Browse
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Cover Letter - Full Width */}
                    <div className="space-y-1 w-full">
                        <label htmlFor="coverLetter" className="block text-xs text-gray-600">
                            Cover Letter
                        </label>
                        <textarea
                            id="coverLetter"
                            {...register("coverLetter")}
                            rows={8}
                            placeholder="Write here"
                            className="w-full border border-gray-300 focus:outline-none focus:ring-1 focus:ring-btn-bg px-2 py-2 rounded-sm text-xs placeholder:text-xs outline-none transition-all duration-300 resize-none"
                        />
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-end gap-4 pt-6">
                        <button
                            type="button"
                            onClick={handleCancel}
                            className="px-6 py-2 border border-btn-bg rounded-sm text-btn-bg text-sm font-medium transition-colors cursor-pointer"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-6 py-2 bg-btn-bg text-white text-sm font-medium rounded-sm hover:bg-btn-bg/90 transition-colors cursor-pointer"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </PageLayout>
        </div>
    )
}

export default ApplyJob
