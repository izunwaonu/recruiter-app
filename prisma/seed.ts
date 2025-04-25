import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  // Clear existing data
  console.log("Clear existing data")
  await prisma.application.deleteMany({})
  await prisma.jobRole.deleteMany({})
  await prisma.jobCategory.deleteMany({})

  // Create job categories with better icons
  console.log("Create job categories with better icons")
  const engineering = await prisma.jobCategory.create({
    data: {
      name: "Engineering & Manufacturing",
      icon: "engineering",
    },
  })

  const it = await prisma.jobCategory.create({
    data: {
      name: "Information Technology (IT)",
      icon: "computer",
    },
  })

  const business = await prisma.jobCategory.create({
    data: {
      name: "Business, Finance & Administration",
      icon: "briefcase",
    },
  })

  const sales = await prisma.jobCategory.create({
    data: {
      name: "Sales, Marketing & Customer Service",
      icon: "shopping-cart",
    },
  })

  const healthcare = await prisma.jobCategory.create({
    data: {
      name: "Healthcare & Medical",
      icon: "heart-pulse",
    },
  })

  const education = await prisma.jobCategory.create({
    data: {
      name: "Education",
      icon: "graduation-cap",
    },
  })

  const construction = await prisma.jobCategory.create({
    data: {
      name: "Construction & Skilled Trades",
      icon: "hammer",
    },
  })

  const logistics = await prisma.jobCategory.create({
    data: {
      name: "Logistics & Supply Chain",
      icon: "truck",
    },
  })

  const publicSector = await prisma.jobCategory.create({
    data: {
      name: "Public Sector & Law",
      icon: "scale",
    },
  })

  const hospitality = await prisma.jobCategory.create({
    data: {
      name: "Hospitality & Tourism",
      icon: "utensils",
    },
  })

  // Create job roles for Engineering & Manufacturing
  console.log("Create job roles for Engineering & Manufacturing")
  await prisma.jobRole.createMany({
    data: [
      {
        title: "Mechanical Engineer",
        description:
          "Design, develop, and test mechanical devices, equipment, and systems. Responsibilities include analyzing problems, creating solutions, and ensuring products meet quality standards.",
        salaryRange: "£35,000 - £60,000",
        categoryId: engineering.id,
      },
      {
        title: "Electrical Engineer",
        description:
          "Design, develop, and maintain electrical systems and equipment. Work with everything from small electronic devices to large-scale electrical distribution systems.",
        salaryRange: "£30,000 - £65,000",
        categoryId: engineering.id,
      },
      {
        title: "Civil Engineer",
        description:
          "Design, develop, and supervise infrastructure projects such as roads, buildings, airports, tunnels, dams, bridges, and water supply systems.",
        salaryRange: "£28,000 - £55,000",
        categoryId: engineering.id,
      },
      {
        title: "Quality Control Inspector",
        description:
          "Ensure products meet quality standards by inspecting materials, production processes, and finished items. Document findings and recommend improvements.",
        salaryRange: "£25,000 - £40,000",
        categoryId: engineering.id,
      },
      {
        title: "CAD Technician",
        description:
          "Create detailed technical drawings and plans using computer-aided design (CAD) software. Work closely with engineers and architects to produce accurate designs.",
        salaryRange: "£22,000 - £35,000",
        categoryId: engineering.id,
      },
      {
        title: "Production Manager",
        description:
          "Oversee manufacturing processes to ensure efficient production operations. Manage staff, schedules, and resources while maintaining quality and safety standards.",
        salaryRange: "£35,000 - £60,000",
        categoryId: engineering.id,
      },
    ],
  })

  // Create job roles for IT
  console.log("Create job roles for IT")
  await prisma.jobRole.createMany({
    data: [
      {
        title: "Software Developer",
        description:
          "Design, build, and maintain efficient, reusable, and reliable code. Collaborate with team members to establish specifications and develop software solutions.",
        salaryRange: "£30,000 - £80,000",
        categoryId: it.id,
      },
      {
        title: "Data Analyst / Data Scientist",
        description:
          "Collect, process, and analyze data to identify patterns and trends. Create visualizations and reports to communicate findings and support business decisions.",
        salaryRange: "£35,000 - £70,000",
        categoryId: it.id,
      },
      {
        title: "Cybersecurity Analyst",
        description:
          "Protect computer systems and networks from information disclosure, theft, or damage. Monitor for security breaches and implement countermeasures when needed.",
        salaryRange: "£40,000 - £75,000",
        categoryId: it.id,
      },
      {
        title: "IT Support Specialist",
        description:
          "Provide technical assistance to computer users. Diagnose and resolve hardware, software, and network issues to ensure smooth operations.",
        salaryRange: "£22,000 - £40,000",
        categoryId: it.id,
      },
      {
        title: "Cloud Engineer",
        description:
          "Design, implement, and manage cloud-based systems. Ensure security, scalability, and reliability of cloud infrastructure.",
        salaryRange: "£45,000 - £85,000",
        categoryId: it.id,
      },
      {
        title: "UI/UX Designer",
        description:
          "Create user-friendly interfaces and experiences for websites and applications. Conduct user research and testing to improve design solutions.",
        salaryRange: "£30,000 - £60,000",
        categoryId: it.id,
      },
      {
        title: "DevOps Engineer",
        description:
          "Combine software development and IT operations to shorten development cycles and ensure continuous delivery. Implement automation tools and processes.",
        salaryRange: "£45,000 - £80,000",
        categoryId: it.id,
      },
    ],
  })

  // Create job roles for Business, Finance & Administration
  console.log("Create job roles for Business, Finance & Administration")
  await prisma.jobRole.createMany({
    data: [
      {
        title: "Accountant",
        description:
          "Prepare and examine financial records, ensuring accuracy and compliance with regulations. Calculate taxes, prepare tax returns, and assess financial operations.",
        salaryRange: "£28,000 - £60,000",
        categoryId: business.id,
      },
      {
        title: "Auditor",
        description:
          "Examine financial statements, accounts, and records to ensure accuracy and compliance with laws and regulations. Identify financial risks and suggest improvements.",
        salaryRange: "£30,000 - £65,000",
        categoryId: business.id,
      },
      {
        title: "Financial Analyst",
        description:
          "Analyze financial data to forecast business, industry, and economic conditions. Prepare reports and recommend investments or strategies.",
        salaryRange: "£35,000 - £70,000",
        categoryId: business.id,
      },
      {
        title: "HR Officer",
        description:
          "Manage recruitment, employee relations, training, and development. Ensure compliance with employment laws and implement HR policies and procedures.",
        salaryRange: "£25,000 - £45,000",
        categoryId: business.id,
      },
      {
        title: "Office Administrator",
        description:
          "Coordinate office activities and operations to ensure efficiency. Manage schedules, communications, supplies, and provide administrative support.",
        salaryRange: "£20,000 - £30,000",
        categoryId: business.id,
      },
      {
        title: "Project Manager",
        description:
          "Plan, execute, and close projects, ensuring they are delivered on time, within scope, and within budget. Coordinate resources and manage risks.",
        salaryRange: "£35,000 - £70,000",
        categoryId: business.id,
      },
      {
        title: "Business Analyst",
        description:
          "Analyze business processes and systems to identify improvements. Gather requirements and recommend solutions to enhance efficiency and effectiveness.",
        salaryRange: "£30,000 - £65,000",
        categoryId: business.id,
      },
    ],
  })

  // Create job roles for Sales, Marketing & Customer Service
  console.log("Create job roles for Sales, Marketing & Customer Service")
  await prisma.jobRole.createMany({
    data: [
      {
        title: "Sales Executive",
        description:
          "Identify and pursue new sales opportunities. Build and maintain customer relationships to achieve sales targets and business growth.",
        salaryRange: "£25,000 - £60,000 + Commission",
        categoryId: sales.id,
      },
      {
        title: "Marketing Manager",
        description:
          "Develop and implement marketing strategies to promote products or services. Analyze market trends and competitor activities to identify opportunities.",
        salaryRange: "£30,000 - £65,000",
        categoryId: sales.id,
      },
      {
        title: "Digital Marketing Specialist",
        description:
          "Plan and execute digital marketing campaigns across various platforms. Monitor performance metrics and optimize strategies for better results.",
        salaryRange: "£25,000 - £45,000",
        categoryId: sales.id,
      },
      {
        title: "Customer Service Advisor",
        description:
          "Provide assistance and information to customers. Handle inquiries, resolve complaints, and ensure customer satisfaction.",
        salaryRange: "£18,000 - £25,000",
        categoryId: sales.id,
      },
      {
        title: "Social Media Manager",
        description:
          "Create and manage content for social media platforms. Engage with audiences and analyze performance to improve social media strategies.",
        salaryRange: "£25,000 - £40,000",
        categoryId: sales.id,
      },
      {
        title: "Telemarketer",
        description:
          "Contact potential customers to promote products or services. Generate leads and arrange appointments for sales representatives.",
        salaryRange: "£18,000 - £25,000 + Commission",
        categoryId: sales.id,
      },
    ],
  })

  // Create job roles for Healthcare & Medical
  console.log("Create job roles for Healthcare & Medical")
  await prisma.jobRole.createMany({
    data: [
      {
        title: "Nurse (RGN, RMN)",
        description:
          "Provide care for patients in hospitals, clinics, or community settings. Administer medications, monitor conditions, and coordinate with healthcare teams.",
        salaryRange: "£24,000 - £45,000",
        categoryId: healthcare.id,
      },
      {
        title: "Doctor / GP",
        description:
          "Diagnose and treat illnesses, injuries, and other health conditions. Prescribe medications, order tests, and refer patients to specialists when needed.",
        salaryRange: "£60,000 - £120,000",
        categoryId: healthcare.id,
      },
      {
        title: "Healthcare Assistant",
        description:
          "Support healthcare professionals in providing care to patients. Assist with daily activities, monitor conditions, and ensure patient comfort.",
        salaryRange: "£18,000 - £24,000",
        categoryId: healthcare.id,
      },
      {
        title: "Physiotherapist",
        description:
          "Help patients recover from injuries or manage chronic conditions through physical therapy. Develop treatment plans and provide exercises and techniques.",
        salaryRange: "£24,000 - £45,000",
        categoryId: healthcare.id,
      },
      {
        title: "Radiographer",
        description:
          "Produce images of the inside of the body using various techniques such as X-rays, CT scans, and MRIs to help diagnose illnesses and injuries.",
        salaryRange: "£24,000 - £40,000",
        categoryId: healthcare.id,
      },
      {
        title: "Pharmacist",
        description:
          "Dispense medications and provide advice on their use. Ensure prescriptions are accurate and advise on potential side effects or interactions.",
        salaryRange: "£32,000 - £50,000",
        categoryId: healthcare.id,
      },
    ],
  })

  // Create job roles for Education
  console.log("Create job roles for Education")
  await prisma.jobRole.createMany({
    data: [
      {
        title: "Primary/Secondary School Teacher",
        description:
          "Educate students in specific subjects or across the curriculum. Plan lessons, assess progress, and support student development.",
        salaryRange: "£25,000 - £41,000",
        categoryId: education.id,
      },
      {
        title: "Teaching Assistant",
        description:
          "Support teachers in the classroom by helping with lesson preparation, working with students, and managing classroom activities.",
        salaryRange: "£17,000 - £25,000",
        categoryId: education.id,
      },
      {
        title: "SEN (Special Educational Needs) Teacher",
        description:
          "Teach students with special educational needs. Develop individualized education plans and adapt teaching methods to meet diverse learning needs.",
        salaryRange: "£26,000 - £42,000",
        categoryId: education.id,
      },
      {
        title: "Lecturer (University/College)",
        description:
          "Teach courses at higher education institutions. Conduct research, publish academic papers, and contribute to curriculum development.",
        salaryRange: "£35,000 - £60,000",
        categoryId: education.id,
      },
      {
        title: "Nursery Practitioner",
        description:
          "Care for and educate children in early years settings. Plan activities, monitor development, and ensure a safe and stimulating environment.",
        salaryRange: "£17,000 - £25,000",
        categoryId: education.id,
      },
    ],
  })

  // Create job roles for Construction & Skilled Trades
  console.log("Create job roles for Construction & Skilled Trades")
  await prisma.jobRole.createMany({
    data: [
      {
        title: "Site Manager",
        description:
          "Oversee construction projects from start to finish. Coordinate workers, materials, and equipment to ensure projects are completed on time and within budget.",
        salaryRange: "£35,000 - £60,000",
        categoryId: construction.id,
      },
      {
        title: "Plumber",
        description:
          "Install, repair, and maintain plumbing systems in residential, commercial, and industrial buildings. Work with pipes, fixtures, and appliances.",
        salaryRange: "£25,000 - £40,000",
        categoryId: construction.id,
      },
      {
        title: "Electrician",
        description:
          "Install, maintain, and repair electrical systems and equipment. Ensure compliance with safety codes and regulations.",
        salaryRange: "£25,000 - £40,000",
        categoryId: construction.id,
      },
      {
        title: "Carpenter",
        description:
          "Work with wood to create, install, and repair structures and fixtures. Read blueprints, measure materials, and use hand and power tools.",
        salaryRange: "£22,000 - £35,000",
        categoryId: construction.id,
      },
      {
        title: "Quantity Surveyor",
        description:
          "Estimate and monitor construction costs. Prepare tender documents, contracts, and final accounts for construction projects.",
        salaryRange: "£30,000 - £60,000",
        categoryId: construction.id,
      },
      {
        title: "Bricklayer",
        description:
          "Construct and repair walls, foundations, and other structures using bricks, concrete blocks, and similar materials.",
        salaryRange: "£22,000 - £35,000",
        categoryId: construction.id,
      },
    ],
  })

  // Create job roles for Logistics & Supply Chain
  console.log("Create job roles for Logistics & Supply Chain")
  await prisma.jobRole.createMany({
    data: [
      {
        title: "Warehouse Operative",
        description:
          "Receive, store, and dispatch goods in warehouses. Use equipment such as forklifts, maintain inventory records, and ensure safe handling of items.",
        salaryRange: "£18,000 - £25,000",
        categoryId: logistics.id,
      },
      {
        title: "Delivery Driver",
        description:
          "Transport goods from warehouses to customers. Plan delivery routes, load and unload vehicles, and ensure timely and safe delivery.",
        salaryRange: "£20,000 - £30,000",
        categoryId: logistics.id,
      },
      {
        title: "Forklift Operator",
        description:
          "Operate forklifts to move materials in warehouses, storage yards, or factories. Ensure safe handling and proper storage of goods.",
        salaryRange: "£20,000 - £28,000",
        categoryId: logistics.id,
      },
      {
        title: "Supply Chain Coordinator",
        description:
          "Coordinate and monitor supply chain activities. Track shipments, manage inventory, and communicate with suppliers and customers.",
        salaryRange: "£25,000 - £35,000",
        categoryId: logistics.id,
      },
      {
        title: "Logistics Manager",
        description:
          "Oversee the entire logistics operation. Plan, implement, and control the efficient flow of goods from suppliers to customers.",
        salaryRange: "£35,000 - £60,000",
        categoryId: logistics.id,
      },
    ],
  })

  // Create job roles for Public Sector & Law
  await prisma.jobRole.createMany({
    data: [
      {
        title: "Police Officer",
        description:
          "Maintain law and order, prevent and detect crime, and protect the public. Patrol assigned areas, respond to emergencies, and investigate incidents.",
        salaryRange: "£21,000 - £41,000",
        categoryId: publicSector.id,
      },
      {
        title: "Firefighter",
        description:
          "Respond to fires and other emergencies. Rescue people and animals, provide medical assistance, and educate the public about fire safety.",
        salaryRange: "£23,000 - £31,000",
        categoryId: publicSector.id,
      },
      {
        title: "Social Worker",
        description:
          "Support individuals and families through difficult times. Assess needs, provide counseling, and connect people with resources and services.",
        salaryRange: "£24,000 - £40,000",
        categoryId: publicSector.id,
      },
      {
        title: "Legal Assistant",
        description:
          "Support lawyers by conducting research, preparing documents, and organizing files. Assist with case preparation and administrative tasks.",
        salaryRange: "£20,000 - £30,000",
        categoryId: publicSector.id,
      },
      {
        title: "Solicitor",
        description:
          "Provide legal advice and services to clients. Prepare legal documents, represent clients in court, and negotiate settlements.",
        salaryRange: "£30,000 - £100,000",
        categoryId: publicSector.id,
      },
      {
        title: "Court Clerk",
        description:
          "Provide administrative support in courts. Prepare and process legal documents, maintain records, and assist judges and other court officials.",
        salaryRange: "£18,000 - £28,000",
        categoryId: publicSector.id,
      },
    ],
  })

  // Create job roles for Hospitality & Tourism
  await prisma.jobRole.createMany({
    data: [
      {
        title: "Hotel Receptionist",
        description:
          "Welcome guests, handle check-ins and check-outs, and provide information about hotel services and local attractions. Manage reservations and respond to inquiries.",
        salaryRange: "£18,000 - £25,000",
        categoryId: hospitality.id,
      },
      {
        title: "Chef / Cook",
        description:
          "Prepare meals in restaurants, hotels, or other food service establishments. Create menus, order supplies, and ensure food quality and safety.",
        salaryRange: "£22,000 - £45,000",
        categoryId: hospitality.id,
      },
      {
        title: "Bartender",
        description:
          "Mix and serve drinks in bars, pubs, and restaurants. Take orders, recommend beverages, and ensure customer satisfaction.",
        salaryRange: "£18,000 - £25,000 + Tips",
        categoryId: hospitality.id,
      },
      {
        title: "Travel Agent",
        description:
          "Help clients plan and book travel arrangements. Provide information about destinations, accommodations, and transportation options.",
        salaryRange: "£20,000 - £30,000",
        categoryId: hospitality.id,
      },
      {
        title: "Housekeeping Staff",
        description:
          "Clean and maintain rooms and public areas in hotels and other accommodations. Ensure cleanliness, comfort, and safety for guests.",
        salaryRange: "£17,000 - £22,000",
        categoryId: hospitality.id,
      },
      {
        title: "Tour Guide",
        description:
          "Lead tours of historical sites, museums, or other attractions. Provide information about points of interest and answer questions from visitors.",
        salaryRange: "£18,000 - £25,000",
        categoryId: hospitality.id,
      },
    ],
  })

  console.log("Database seeded successfully")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
console.log("Completed")