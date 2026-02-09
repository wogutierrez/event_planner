import React from 'react';
import './EventPlanner.css'; // Import CSS file for styling

const EventPlanner = () => {
    return (
        <div className="event-planner-container">
            <header>
                <h1>Welcome to Event Planner</h1>
            </header>

             {/* Section for describing the purpose or overview of the app */}
            <section className="description">
                {/* Description content goes here */}
                <p>
                Plan and organize your events effortlessly with Event Planner. From
                birthdays to corporate meetings, we've got you covered.
                </p>
            </section>
            {/* Section to list or categorize different types of events */}
            <section className="events_categories">
                {/* Event categories content goes here */}
            </section>
            {/* Section to highlight app features or functionalities */}
            <section className="features">
                {/* Features content goes here */}
            </section>
            {/* Section to showcase user reviews or testimonials */}
            <section className="testimonials">
                {/* Testimonials content goes here */}
            </section>
            {/* Section to provide contact information or a contact form */}
            <section className="contact">
                {/* Contact content goes here */}
            </section>

        </div>
    );
};

export default EventPlanner;
