'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import emailjs from '@emailjs/browser'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  number: z.string().regex(/^\+?[1-9]\d{1,14}$/, { message: 'Please enter a valid phone number.' }),
  message: z.string().optional(),
})

export function BetaSignupForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [notification, setNotification] = useState<{ type: 'success' | 'error', message: string } | null>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      number: '',
      message: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    emailjs.send(
      'service_bh0p1wd',
      'template_raat06v',
      {
        name: values.name,
        email: values.email,
        number: values.number,
        message: values.message,
      },
      'dM2ZB8P9LvoXAkJyq'
    ).then(() => {
      setIsLoading(false)
      setNotification({ type: 'success', message: 'Thank you for signing up. We\'ll be in touch soon!' })
      form.reset()
    }).catch(() => {
      setIsLoading(false)
      setNotification({ type: 'error', message: 'There was a problem submitting your form. Please try again.' })
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-zinc-800">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center lg:pr-8">
          <h1 className="text-7xl font-bold text-white mb-6 tracking-tight">Viago</h1>
          <p className="text-3xl text-[#ffbf00] font-semibold mb-4">Coming Soon</p>
          <p className="text-zinc-400 text-xl leading-relaxed">
            We're building something exciting and can't wait to share it with you. Join our beta program to be among the first to experience Viago and help shape its future.
          </p>
        </div>

        <Card className="bg-zinc-800/50 backdrop-blur border-zinc-700/50">
          <div className="p-8">
            <h2 className="text-3xl font-bold text-white mb-2">Join Viago Beta</h2>
            <p className="text-zinc-400 mb-8 text-lg">Your feedback will be invaluable in making Viago better for everyone.</p>
            {notification && (
              <div className={`p-4 mb-6 rounded ${notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}>
                {notification.message}
              </div>
            )}
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white text-lg">Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Mohamed James Kumar" {...field} className="bg-zinc-700/50 text-white border-zinc-600" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white text-lg">Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="vip@gmail.com" {...field} className="bg-zinc-700/50 text-white border-zinc-600" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="number"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white text-lg">Phone Number</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="+228-242-7433" {...field} className="bg-zinc-700/50 text-white border-zinc-600" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white text-lg">Suggestions (Optional)</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Share your ideas and feedback..." {...field} className="bg-zinc-700/50 text-white border-zinc-600 min-h-[100px]" />
                      </FormControl>
                      <FormDescription className="text-zinc-400">
                        Help us improve Viago with your suggestions.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-[#ffbf00] text-black hover:bg-[#e6ac00] text-lg py-6" disabled={isLoading}>
                  {isLoading ? 'Submitting...' : 'Join Viago Beta'}
                </Button>
              </form>
            </Form>
          </div>
        </Card>
      </div>
    </div>
  )
}