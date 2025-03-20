"use client";
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ContactForm from "@/components/ContactForm"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Award,
  Code,
  Computer,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Settings,
  PenToolIcon as Tool,
  Trophy,
  Wrench,
} from "lucide-react"

const downloadResume = () => {
  const link = document.createElement("a");
  link.href = "/AhmedAbidCV__Copy_ (5).pdf"; // Path to the PDF file
  link.download = "AhmedAbidCV.pdf"; // Suggested filename
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Settings className="h-6 w-6 rotate-12 animate-pulse text-primary" />
            <span className="text-xl font-bold">The Fluffy Engineer</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#hackathons" className="text-sm font-medium hover:text-primary transition-colors">
              Hackathons
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <Button asChild size="sm" className="hidden md:flex">
            <Link href="#contact">Let's Connect</Link>
          </Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Robotics Engineer & 11xHackathon prize winner
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Turning complex engineering challenges into innovative solutions with creativity and technical
                    expertise.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="#projects">View My Work</Link>
                  </Button>
                  <Button variant="outline" size="lg" onClick={downloadResume}>
                      <Download className="h-4 w-4" />
                      Download Resume
                  </Button>
                </div>
                <div className="flex gap-4 mt-4">
                  <Link href="https://github.com/hardsoft-maker" className="text-muted-foreground hover:text-primary">
                    <Github className="h-6 w-6" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link href="https://www.linkedin.com/in/ahmed-abid-53b090203/" className="text-muted-foreground hover:text-primary">
                    <Linkedin className="h-6 w-6" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link href="#contact" className="text-muted-foreground hover:text-primary">
                    <Mail className="h-6 w-6" />
                    <span className="sr-only">Email</span>
                  </Link>
                </div>
              </div>
              <div className="relative h-[400px] w-full overflow-hidden rounded-xl bg-muted">
                <Image
                  src="/me.jpg?height=800&width=800"
                  alt="Profile Image"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="px-3 py-1 text-sm">
                  About Me
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Passionate Engineer & Problem Solver
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I'm a Robotics engineer with a passion for innovation and a track record of success in
                  hackathons. I combine technical expertise with creative thinking to develop solutions that make a
                  difference.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <div className="flex items-center gap-2">
                        <Tool className="h-5 w-5 text-primary" />
                        <h3 className="text-xl font-bold">Mechanical Design</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Specialized in creating efficient, innovative mechanical systems using advanced CAD tools and
                        simulation software.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <div className="flex items-center gap-2">
                        <Trophy className="h-5 w-5 text-primary" />
                        <h3 className="text-xl font-bold">Hackathon Champion</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Multiple-time hackathon winner with a knack for rapid prototyping and delivering under pressure.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <div className="flex items-center gap-2">
                        <Code className="h-5 w-5 text-primary" />
                        <h3 className="text-xl font-bold">Technical Skills</h3>
                      </div>
                      <p className="text-muted-foreground">
                        Proficient in CAD software, FEA analysis, and programming for automation and simulation.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative h-[400px] w-full overflow-hidden rounded-xl bg-muted">
                <Image
                  src="/force_sensor.jpg?height=800&width=800"
                  alt="Working on a project"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="px-3 py-1 text-sm">
                  Skills & Expertise
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Technical Proficiencies</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A comprehensive toolkit of engineering skills and software proficiencies that enable me to tackle
                  complex challenges.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Wrench className="h-5 w-5 text-primary" />
                    <CardTitle>Mechanical Design</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>SolidWorks</li>
                    <li>AutoCAD</li>
                    <li>Fusion 360</li>
                    <li>NX Siemens</li>
                    <li>Parametric Modeling</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Settings className="h-5 w-5 text-primary" />
                    <CardTitle>Analysis & Simulation</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Finite Element Analysis</li>
                    <li>Computational Fluid Dynamics</li>
                    <li>Thermal Analysis</li>
                    <li>Motion Studies</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Code className="h-5 w-5 text-primary" />
                    <CardTitle>Programming</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>MATLAB</li>
                    <li>Python</li>
                    <li>C++</li>
                    <li>Arduino</li>
                    <li>Raspberry Pi</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Tool className="h-5 w-5 text-primary" />
                    <CardTitle>Prototyping</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>3D Printing</li>
                    <li>CNC Machining</li>
                    <li>Laser Cutting</li>
                    <li>Rapid Prototyping</li>
                    <li>Workshop Skills</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-primary" />
                    <CardTitle>Project Management</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Agile Methodologies</li>
                    <li>SCRUM</li>
                    <li>Team Leadership</li>
                    <li>Time Management</li>
                    <li>Resource Planning</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    <CardTitle>Soft Skills</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Problem Solving</li>
                    <li>Creative Thinking</li>
                    <li>Communication</li>
                    <li>Presentation</li>
                    <li>Collaboration</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Computer className="h-5 w-5 text-primary" />
                    <CardTitle>Computer vision & DL</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Pytorch</li>
                    <li>OpenCV</li>
                    <li>YOLO</li>
                    <li>CNNs</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="px-3 py-1 text-sm">
                  Portfolio
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A showcase of my engineering work, from concept to completion.
                </p>
              </div>
            </div>
            <Tabs defaultValue="all" className="mt-12">
              <TabsContent value="all" className="mt-8">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {/* Project 1 */}
                  <Card className="overflow-hidden">
                    <div className="relative h-[200px] w-full overflow-hidden">
                      <Image
                        src="/AGV.jpg?height=400&width=600"
                        alt="Automated Assembly System"
                        fill
                        className="object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>AGV (Automated guided vehicle)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                      Led Mechanics and electronics team from Innopolis university to build an AGV using Lidar, Depth camera and other sensors to transport a max payload of 100kg.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <Badge variant="secondary">SolidWorks</Badge>
                        <Badge variant="secondary">Automation</Badge>
                        <Badge variant="secondary">Eagle</Badge>
                        <Badge variant="secondary">ROS</Badge>
                        <Badge variant="secondary">Leadership</Badge>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <Link href="https://github.com/hardsoft-maker/HardwareOverlord100" className="flex items-center gap-1">
                          <ExternalLink className="h-4 w-4" />
                          View Project
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Project 2 */}
                  <Card className="overflow-hidden">
                    <div className="relative h-[200px] w-full overflow-hidden">
                      <Image
                        src="/wind_tunnel.jpg?height=400&width=600"
                        alt="Lightweight Drone Frame"
                        fill
                        className="object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>Wind Tunnel</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                      Designed a functional 20cm*20cm test section sized wind tunnel according to industry standards for fun.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <Badge variant="secondary">Solidworks</Badge>
                        <Badge variant="secondary">FEA</Badge>
                        <Badge variant="secondary">Simulation</Badge>
                        <Badge variant="secondary">Aerodynamics</Badge>
                        
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <Link href="https://github.com/hardsoft-maker/Wind-Tunnel" className="flex items-center gap-1">
                          <ExternalLink className="h-4 w-4" />
                          View Project
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Project 3 */}
                  <Card className="overflow-hidden">
                    <div className="relative h-[200px] w-full overflow-hidden">
                      <Image
                        src="/rsz_drone.jpg?height=400&width=600"
                        alt="F450 Drone"
                        fill
                        className="object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>F450 drone</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        3D designed and printed an F450 quadcopter chassis then assembled the motors and ESCs to the flight controller and run some flights (no crashes)
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <Badge variant="secondary">3D printing</Badge>
                        <Badge variant="secondary">Solidworks</Badge>
                        <Badge variant="secondary">Eagle</Badge>
                        <Badge variant="secondary">Prototyping</Badge>
                        <Badge variant="secondary">aerodynamics</Badge>

                      </div>
                    </CardContent>
                    <CardFooter>
                      
                    </CardFooter>
                  </Card>

                  {/* Project 4 */}
                  <Card className="overflow-hidden">
                    <div className="relative h-[200px] w-full overflow-hidden">
                      <Image
                        src="/da_tank.jpg?height=400&width=600"
                        alt="Electric Vehicle Battery Cooling"
                        fill
                        className="object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>All-terrain Tank with quadcopter</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                      Designed an all-terrain tank and a quadcopter which is able to transport small quadcopters for hard to reach destination.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <Badge variant="secondary">Aerodynamics</Badge>
                        <Badge variant="secondary">Simulation</Badge>
                        <Badge variant="secondary">Solidowrks</Badge>
                        <Badge variant="secondary">FEA</Badge>
                        <Badge variant="secondary">Team Work</Badge>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <Link href="https://grabcad.com/library/tank-with-attached-drone-quadcopter-1" className="flex items-center gap-1">
                          <ExternalLink className="h-4 w-4" />
                          View Project
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Project 5 */}
                  <Card className="overflow-hidden">
                    <div className="relative h-[200px] w-full overflow-hidden">
                      <Image
                        src="/cansat.jpg?height=400&width=600"
                        alt="Prosthetic Hand"
                        fill
                        className="object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>Cansat</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Built a tiny satellite using LoRa Network, IMU, also tried to allow it to throw it from high story building to land with a parachute but using a quadcopter was more fun.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <Badge variant="secondary">3D Printing</Badge>
                        <Badge variant="secondary">Prototyping</Badge>
                        <Badge variant="secondary">Simulation</Badge>
                        <Badge variant="secondary">NX siemens</Badge>
                        <Badge variant="secondary">Leadership</Badge>
                        <Badge variant="secondary">Teamwork</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Project 6 */}
                  <Card className="overflow-hidden">
                    <div className="relative h-[200px] w-full overflow-hidden">
                      <Image
                        src="/drone_frame.jpg?height=400&width=600"
                        alt="Automated Farming Robot"
                        fill
                        className="object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>Drone Protective Frame</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Designed and built a carbon fiber frame which would be able to absorb a maximum impact speed of 2 m/s with a drone weight of 3 kg.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <Badge variant="secondary">SolidWorks</Badge>
                        <Badge variant="secondary">Aerodynamics</Badge>
                        <Badge variant="secondary">Simulation</Badge>
                        <Badge variant="secondary">Prototyping</Badge>
                        
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <Link href="https://grabcad.com/library/drone-protective-frame-1" className="flex items-center gap-1">
                          <ExternalLink className="h-4 w-4" />
                          View Project
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Project 7 */}
                  <Card className="overflow-hidden">
                    <div className="relative h-[200px] w-full overflow-hidden">
                      <Image
                        src="/TalkTuahTaxer.png?height=400&width=600"
                        alt="Automated Farming Robot"
                        fill
                        className="object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>TalkTuahTaxer</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Built a gen Z financial advisor which uses conversational AI to assist users with their spendings on Amazon.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <Badge variant="secondary">Javascript</Badge>
                        <Badge variant="secondary">ElevenLabs</Badge>
                        <Badge variant="secondary">Teamwork</Badge>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <Link href="https://github.com/hardsoft-maker/TalkTuahTaxer" className="flex items-center gap-1">
                          <ExternalLink className="h-4 w-4" />
                          View Project
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Project 8 */}
                  <Card className="overflow-hidden">
                    <div className="relative h-[200px] w-full overflow-hidden">
                      <Image
                        src="/Rassor.jpg?height=400&width=600"
                        alt="Automated Farming Robot"
                        fill
                        className="object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>Rassor</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Designed an excavator to help with Lunar soil excavation with minimal energy consumption.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <Badge variant="secondary">Robotics</Badge>
                        <Badge variant="secondary">Simulation</Badge>
                        <Badge variant="secondary">SolidWorks</Badge>
                      </div>
                    </CardContent>
                    <CardFooter>
                    </CardFooter>
                  </Card>
                  {/* Project 9 */}
                  <Card className="overflow-hidden">
                    <div className="relative h-[200px] w-full overflow-hidden">
                      <Image
                        src="/stamp.png?height=400&width=600"
                        alt="Automated Farming Robot"
                        fill
                        className="object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>Stamp Recognition</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Developed a Computer vision model with my team to detect, classify and compare stamps. Users only need to upload the scanned documents.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <Badge variant="secondary">Computer vision</Badge>
                        <Badge variant="secondary">Machine learning</Badge>
                        <Badge variant="secondary">Tensorflow</Badge>
                        <Badge variant="secondary">Teamwork</Badge>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <Link href="https://gitlab.pg.innopolis.university/stamp-project-group1/project-test/-/blob/main/requirements.txt?ref_type=heads" className="flex items-center gap-1">
                          <ExternalLink className="h-4 w-4" />
                          View Project
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                  {/* Project 10 */}
                  <Card className="overflow-hidden">
                    <div className="relative h-[200px] w-full overflow-hidden">
                      <Image
                        src="/ASAL.png?height=400&width=600"
                        alt="Automated Farming Robot"
                        fill
                        className="object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>Recognition of the American sign language</CardTitle>
                      <CardDescription>Autonomous farming assistant for precision agriculture</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Developed a high accuracy deep learning model to recognize American Sign language alphabet with my team.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <Badge variant="secondary">Deep Learning</Badge>
                        <Badge variant="secondary">CNN</Badge>
                        <Badge variant="secondary">FastAPI</Badge>
                        <Badge variant="secondary">Docker</Badge>
                        <Badge variant="secondary">Teamwork</Badge>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <Link href="https://github.com/hardsoft-maker/asl-alphabet-recongnition" className="flex items-center gap-1">
                          <ExternalLink className="h-4 w-4" />
                          View Project
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Project 11 */}
                  <Card className="overflow-hidden">
                    <div className="relative h-[200px] w-full overflow-hidden">
                      <Image
                        src="/roadlanedetection.jpg?height=400&width=600"
                        alt="Automated Farming Robot"
                        fill
                        className="object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>Road Lane Detection</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Build a real time Computer vision model for road lane detection designed for Yandex robots.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <Badge variant="secondary">Computer vision</Badge>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <Link href="https://github.com/hardsoft-maker/Road-Lane-Detection" className="flex items-center gap-1">
                          <ExternalLink className="h-4 w-4" />
                          View Project
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Project 12 */}
                  <Card className="overflow-hidden">
                    <div className="relative h-[200px] w-full overflow-hidden">
                      <Image
                        src="/Dofarm.jpg?height=400&width=600"
                        alt="Automated Farming Robot"
                        fill
                        className="object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>Robotic arm motor selection</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Created a model to select the most suitable motors for UR3 6DOF-robotic arms.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <Badge variant="secondary">Robotics</Badge>
                        <Badge variant="secondary">Arduino</Badge>
                        <Badge variant="secondary">SolidWorks</Badge>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <Link href="https://github.com/hardsoft-maker/Mechatronics-UR3-robotic-arm" className="flex items-center gap-1">
                          <ExternalLink className="h-4 w-4" />
                          View Project
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>

                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Hackathons Section */}
        <section id="hackathons" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="px-3 py-1 text-sm">
                  Achievements
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Hackathon Success Stories</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A showcase of my award-winning hackathon projects.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2">
              {/* Hackathon 1 */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-primary" />
                    <CardTitle>Brainrot Hackathon</CardTitle>
                  </div>
                  <CardDescription>Won 6 prizes - 2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative h-[200px] w-full overflow-hidden rounded-lg mb-4">
                    <Image
                      src="/TalkTuahTaxer.png?height=400&width=600"
                      alt="Global Engineering Hackathon"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-2">TalkTuahTaxer</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                  Built a gen Z financial advisor which uses conversational AI to assist users with their spendings on Amazon. I wrote about it in the projects section hehe.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge>6 Prizes</Badge>
                    <Badge variant="secondary">Finance</Badge>
                    <Badge variant="secondary">Conversational AI</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Hackathon 2 */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-primary" />
                    <CardTitle>ActInSpace</CardTitle>
                  </div>
                  <CardDescription>Grand Prize - 2021</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative h-[200px] w-full overflow-hidden rounded-lg mb-4">
                    <Image
                      src="/ActInSpace.jpg?height=400&width=600"
                      alt="MedTech Innovation Challenge"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-2">SpaceKol</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Designed a Lunar base which would allow the harvest of rare elements and generation of green nuclear energy.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge>1st Place</Badge>
                    <Badge variant="secondary">Space</Badge>
                    <Badge variant="secondary">Startups</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Hackathon 3 */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-primary" />
                    <CardTitle>Enetcom</CardTitle>
                  </div>
                  <CardDescription>1st place - 2020</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative h-[200px] w-full overflow-hidden rounded-lg mb-4">
                    <Image
                      src="/enetcom.jpg?height=400&width=600"
                      alt="Sustainability Hackathon"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Gladiator</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    built a line follow and a maze follower robot using IMU, IR and ultrsound sensors.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge>1st place</Badge>
                    <Badge variant="secondary">Maze solver</Badge>
                    <Badge variant="secondary">Line follower</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Hackathon 4 */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-primary" />
                    <CardTitle>ISGI</CardTitle>
                  </div>
                  <CardDescription>1st Place - 2022</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative h-[200px] w-full overflow-hidden rounded-lg mb-4">
                    <Image
                      src="/yinyangprize.jpg?height=400&width=600"
                      alt="Industry 4.0 Challenge"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Baba sanfour</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    built a robot that detects the road, tracks it and stop at red lights.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge>First Place</Badge>
                    <Badge variant="secondary">IoT</Badge>
                    <Badge variant="secondary">Computer vision</Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Hackathon 5 */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-primary" />
                    <CardTitle>World Robotics Olympiads</CardTitle>
                  </div>
                  <CardDescription>National Finalists - 2019</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative h-[200px] w-full overflow-hidden rounded-lg mb-4">
                    <Image
                      src="/wro.jpg?height=400&width=600"
                      alt="Industry 4.0 Challenge"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-2">The chain</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    built a robot that transports objects to their shelves depending on colors.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge>First Place</Badge>
                    <Badge variant="secondary">Robotics</Badge>
                    <Badge variant="secondary">Lego</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="px-3 py-1 text-sm">
                  Get In Touch
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Let's Work Together</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have a project in mind or interested in collaboration? I'd love to hear from you.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Contact Information</h3>
                  <p className="text-muted-foreground">Feel free to reach out through any of these channels.</p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <p>smartahmadabid@gmail.com</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5 text-primary" />
                    <p>linkedin.com/in/ahmed-abid-53b090203</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Github className="h-5 w-5 text-primary" />
                    <p>github.com/hardsoft-maker</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Location</h3>
                  <p className="text-muted-foreground">
                    Based in Russia, Innopolis
                    <br />
                    Available for remote work and relocation
                  </p>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t bg-background py-6">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Settings className="h-6 w-6 rotate-12 text-primary" />
            <span className="text-lg font-bold">Fluffy the engineer</span>
          </div>
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} All rights reserved. Designed and built with passion.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

