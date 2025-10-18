"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TestFormPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    role: "",
    experience: "",
    skills: "",
    motivation: "",
    github: "",
    portfolio: "",
    availability: "",
    agreeTerms: false,
    agreeNewsletter: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [result, setResult] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setResult("")

    try {
      const submissionData = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        country: formData.country,
        role: formData.role,
        experience_level: formData.experience,
        technical_skills: formData.skills,
        why_join: formData.motivation,
        github: formData.github,
        portfolio: formData.portfolio,
        time_commitment: formData.availability,
        agree_terms: formData.agreeTerms,
        updates_subscription: formData.agreeNewsletter
      }

      console.log("Submitting data:", submissionData)

      const response = await fetch('https://ysoc-backend.onrender.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData)
      })

      console.log("Response status:", response.status)
      const result = await response.json()
      console.log("Response data:", result)

      if (result.status === 'success') {
        setResult(`✅ Success! ${result.message}`)
      } else {
        setResult(`❌ Error: ${result.message}`)
      }
    } catch (error) {
      console.error("Error:", error)
      setResult(`❌ Network Error: ${error}`)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Test Form Submission</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  required
                />
              </div>

              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  required
                />
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  required
                />
              </div>

              <div>
                <Label htmlFor="country">Country</Label>
                <Input
                  id="country"
                  value={formData.country}
                  onChange={(e) => handleInputChange("country", e.target.value)}
                  required
                />
              </div>

              <div>
                <Label htmlFor="role">Role</Label>
                <Input
                  id="role"
                  value={formData.role}
                  onChange={(e) => handleInputChange("role", e.target.value)}
                  placeholder="Contributor, Mentor, Designer, etc."
                  required
                />
              </div>

              <div>
                <Label htmlFor="experience">Experience Level</Label>
                <Input
                  id="experience"
                  value={formData.experience}
                  onChange={(e) => handleInputChange("experience", e.target.value)}
                  placeholder="Beginner, Intermediate, Expert"
                  required
                />
              </div>

              <div>
                <Label htmlFor="skills">Technical Skills</Label>
                <Input
                  id="skills"
                  value={formData.skills}
                  onChange={(e) => handleInputChange("skills", e.target.value)}
                  placeholder="JavaScript, Python, React, etc."
                  required
                />
              </div>

              <div>
                <Label htmlFor="motivation">Why Join Y-SoC?</Label>
                <Input
                  id="motivation"
                  value={formData.motivation}
                  onChange={(e) => handleInputChange("motivation", e.target.value)}
                  required
                />
              </div>

              <div>
                <Label htmlFor="github">GitHub Profile</Label>
                <Input
                  id="github"
                  value={formData.github}
                  onChange={(e) => handleInputChange("github", e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="portfolio">Portfolio/Website</Label>
                <Input
                  id="portfolio"
                  value={formData.portfolio}
                  onChange={(e) => handleInputChange("portfolio", e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="availability">Time Commitment</Label>
                <Input
                  id="availability"
                  value={formData.availability}
                  onChange={(e) => handleInputChange("availability", e.target.value)}
                  placeholder="5-10 hours per week"
                  required
                />
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={(e) => handleInputChange("agreeTerms", e.target.checked)}
                  required
                />
                <Label htmlFor="agreeTerms">I agree to the terms and conditions</Label>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="agreeNewsletter"
                  checked={formData.agreeNewsletter}
                  onChange={(e) => handleInputChange("agreeNewsletter", e.target.checked)}
                />
                <Label htmlFor="agreeNewsletter">Subscribe to updates</Label>
              </div>

              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Test Application"}
              </Button>

              {result && (
                <div className="mt-4 p-4 bg-gray-100 rounded">
                  <pre>{result}</pre>
                </div>
              )}
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
