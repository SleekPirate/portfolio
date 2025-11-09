import { NextRequest, NextResponse } from 'next/server';
import ZAI from 'z-ai-web-dev-sdk';

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    const zai = await ZAI.create();

    const completion = await zai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: `You are Jeneal Mentor's AI assistant, a knowledgeable and friendly chatbot for Jeneal's portfolio website. 

Your role is to:
1. Help visitors learn about Jeneal's skills and projects
2. Answer questions about AI, cybersecurity, and digital innovation
3. Provide information about Jeneal's background as a Digital Associate
4. Be professional yet approachable
5. Guide visitors to relevant sections of the portfolio

Key information about Jeneal:
- Name: Jeneal Mentor - Digital Associate
- Focus: Building AI projects and using AI tools to solve day-to-day problems
- Skills: AI/Machine Learning, Cybersecurity, Full-Stack Development, Digital Innovation
- Projects: Resume Builder, Fruit Scanner, AI Content Generator, Sentiment Analysis Dashboard, AI Bias Audit

Always be helpful, concise, and direct visitors to the appropriate portfolio sections when relevant.`
        },
        {
          role: 'user',
          content: message
        }
      ],
      max_tokens: 500,
      temperature: 0.7,
    });

    const reply = completion.choices[0]?.message?.content || "I apologize, but I couldn't generate a response. Please try again.";

    return NextResponse.json({
      reply: reply.trim(),
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { error: 'Failed to process your message. Please try again later.' },
      { status: 500 }
    );
  }
}