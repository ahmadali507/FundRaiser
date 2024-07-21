'use client';
import { useState } from 'react';
import axios from 'axios';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import Navbar from '@/components/mainComponents/Navbar';

export default function Component() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const route = useRouter(); 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/sendEmail', formData);
      if (response.status === 200) {
        setStatus('Email sent successfully!');
        toast.success('Email sent successfully!');
      }
    } catch (error) {
      console.error(error);
      setStatus('Failed to send email.');
      toast.error('Failed to send email.');
    }
  };

  return (
    <>
    <Navbar/>
    <div className="container bg-black w-full h-[100vh] flex items-center justify-center">
      <Card className="w-full max-w-md mx-auto bg-black bg-opacity-50 backdrop-blur-lg text-white">
        <CardHeader>
          <CardTitle className="text-white">Contact Us</CardTitle>
          <CardDescription className="text-gray-400">Fill out the form below and we will get back to you as soon as possible.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-gray-400">First Name</Label>
                <Input id="firstName" placeholder="Enter your first name" className="bg-gray-700 text-white border-gray-600" onChange={handleChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-gray-400">Last Name</Label>
                <Input id="lastName" placeholder="Enter your last name" className="bg-gray-700 text-white border-gray-600" onChange={handleChange} />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-400">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" className="bg-gray-700 text-white border-gray-600" onChange={handleChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-gray-400">Message</Label>
              <Textarea id="message" placeholder="Enter your message" className="bg-gray-700 text-white border-gray-600 min-h-[100px]" onChange={handleChange} />
            </div>
            <CardFooter>
              <Button type="submit" className="ml-auto bg-blue-600 hover:bg-blue-700 text-white">Submit</Button>
            </CardFooter>
          </form>
          {status && <p className="text-center text-white mt-4">{status}</p>}
        </CardContent>
      </Card>
      <ToastContainer />
    </div>
      <footer className="bg-primary text-primary-foreground py-6">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <p className="text-sm">&copy; 2024 Hope For All. All rights reserved.</p>
          <nav className="flex items-center gap-4">
            <Link href="#" className="hover:underline" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Terms of Service
            </Link>
          </nav>
        </div>
      </footer>
    </>
  );
}
