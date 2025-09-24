"use client";
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Starfield from "@/components/Starfield"
import { AiFillGithub, AiFillInstagram } from "react-icons/ai"
import Typewriter from "@/components/Typewriter";

export default function Page() {
  return (
    <>
     <Starfield />
     <div className="absolute inset-0 bg-purple500 mix-blend-screen pointer-events-none"/>
     <div className="relative flex items-center justify-center h-full"/>
     
     <main className="grid-container h-screen fixed inset-3 -z-10">
      <div>
        <Card className="bg-zinc-950 text-white border-zinc-900 py-6">
          <CardContent className="flex flex-col items-left space-y-4">
            <div>
              <h1 className ="font-mono scroll-m-20 text-left text-xl font-extrabold tracking-tight text-balance">Oliver van der Kouwe</h1>
              <h2 className ="font-mono scroll-m-20 border-b pb-2 text-l font-semibold tracking-tight first:mt-0">Math of Computation @ UCLA</h2>
              
              <br></br>
              <Badge className="outline mr-2">Bay Area</Badge>
              <Badge className="outline ">Los Angeles</Badge>
              <Badge className="outline ml-2">UTC-8</Badge>
              <Badge className="outline ml-2">18/yo</Badge>
              <Badge className="outline mt-2">English & Spanish Proficiency</Badge>
              <Badge className="outline ml-2 mt-2"> First Year</Badge>
              <br></br>
              <div className="flex justify-center space-x-6 mt-8">
                <Button variant="outline" onClick = {() => window.open("https://www.instagram.com/olivdk.07/", "_blank")}> <AiFillInstagram /> Instagram </Button>
                <Button variant="outline" onClick = {() => window.open("https://github.com/olivdk", "_blank")}> <AiFillGithub/> Github </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-zinc-950 text-white border-zinc-900 py-6 mt-3">
          <CardContent className="flex flex-col items-left space-y-4">
            <div className="flex gap-2">
              <span className="font-mono scroll-m-20 text-left text-m font-bold tracking-tight text-balance">My</span>
              <Typewriter text=" Experience" />
            </div>
            <hr/>
            <h2 className="font-mono text-s font-semibold">University:</h2>
            <h6 className="font-mono text-xs">Current: Math 32A, </h6>
            <h2 className="font-mono text-s font-semibold">APs/CC Coursework:</h2>
            <h6 className="font-mono text-xs">
              AP Biology, AP Literature, AP Calculus AB, AP Calculus BC, AP 2D Art, AP Art History, AP Spanish Language & Culture, AP Physics C Mechanics + Electricity & Magnetism, Microeconomics, Java Programming
            </h6>
          </CardContent>
        </Card>
        <Card className="bg-zinc-950 text-white border-zinc-900 py-6 mt-3">
          <CardContent className="flex flex-col items-left space-y-4">
            <span className="font-mono text-s text-purple-500 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] font-bold">Photography @ &nbsp;</span>
            <Button variant="outline" onClick = {() => window.open("https://olivdk.github.io", "_blank")}> My Portfolio </Button>
          </CardContent>
        </Card>
      </div>
      <div className="ml-5">

      </div>
      <div className="ml-5">
        <Card className="bg-zinc-950 text-white border-zinc-900 py-6">
          <CardContent className="flex flex-col items-left space-y-4">
            <div> 
              <h2 className ="font-mono scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight first:mt-0"> Projects: </h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="font-mono">Blackjack</AccordionTrigger>
                  <AccordionContent>
                    <p className="font-mono">
                      Language: C++ <br/> Concepts: Basic game design, arrays, CLI interaction, Data Analysis <br/> <br/> Basic CLI blackjack game that simulates standard gameplay mechanics with real decks. Planning to create a card counting algorithim that analyzes results and outputs simulated game information to a webpage.
                    </p>
                    <br/>
                    <a className ="font-mono text-s underline" href="https://github.com/olivdk/blackJack">Github repo</a>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="font-mono">Portfolio Website</AccordionTrigger>
                  <AccordionContent>
                    <p className="font-mono">
                      Language: Typescript, React, HTML, CSS <br/> Concepts: Front-end web design, Next.js, Node.js, Tailwind CSS, Shadcn <br/> <br/> This website!
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-zinc-950 text-white border-zinc-900 py-3 mt-3">
          <CardContent className="flex flex-row items-left">
            <span className="font-mono text-s text-purple-500 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] font-bold">Contact @&nbsp;</span>
            <h4 className="font-mono text-s">olivervanderkouwe@gmail.com &&nbsp;</h4>
            <a className ="font-mono text-s underline font-bold" href="https://www.linkedin.com/in/oliver-van-der-kouwe-a58501276/">Linkedin</a>
          </CardContent>
        </Card>
      </div>
     </main>
    </>

  )
}