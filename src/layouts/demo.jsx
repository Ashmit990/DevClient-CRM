import React from 'react';
import { developersData } from '../data/developersData'; // Assuming this path is correct

// --- Color Palette Reminder ---
// Primary: #6DA2F9
// Light Accent: #8AB0F7
// Main Background: #F3F6FF (Used as the page background for depth)
// Card Background: #FFFFFF (White for high contrast)
// Muted/Border: #A4AEBF

export const DeveloperTeamOverview = () => {
    
    if (!developersData || developersData.length === 0) {
        return (
            <div className="mx-auto w-[85%] py-12 text-center text-xl text-gray-500 bg-[#F3F6FF] min-h-screen rounded-lg">
                No developer data available.
            </div>
        );
    }

    return (
        // 85% Width Container, Centered. Main Background: #F3F6FF
        <div className="mx-auto w-[85%] py-8 min-h-screen bg-[#F3F6FF]">
            
            {/* Top Bar / Global Search (Refined) */}
            <div className="flex items-center justify-between mb-10 px-4 py-3 bg-white rounded-xl shadow-lg border border-[#A4AEBF]/20">
                <div className="flex items-center w-full">
                    <span className="text-gray-400 mr-3">🔍</span>
                    <input 
                        type="text" 
                        placeholder="Search CRM globally..." 
                        className="p-1 w-full bg-transparent text-gray-800 focus:outline-none"
                    />
                </div>
                <div className="text-sm font-medium text-gray-600">Hi, Admin</div>
                {/* Placeholder for Avatar */}
                <div className="w-8 h-8 rounded-full bg-[#6DA2F9] ml-4"></div>
            </div>


            {/* Main Title and Action Button */}
            <div className="flex justify-between items-center mb-10 px-4">
                <h1 className="text-4xl font-extrabold text-gray-800">Developer Team</h1>
                <button className="px-6 py-2.5 bg-[#6DA2F9] text-white font-bold rounded-xl shadow-xl shadow-[#6DA2F9]/40 hover:bg-[#8AB0F7] transition duration-300 transform hover:-translate-y-0.5">
                    + Add New Developer
                </button>
            </div>

            {/* Filter and Sort Controls (Cleaned up, higher contrast buttons) */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-10 px-4">
                
                <input type="text" placeholder="Search by name, skill, or ID..." 
                       className="p-3 border border-[#A4AEBF] rounded-xl w-72 focus:ring-2 focus:ring-[#8AB0F7] focus:border-[#6DA2F9] transition bg-white shadow-sm"/>
                
                <div className="flex gap-3">
                    {/* Status Filter */}
                    <select className="p-3 border border-[#A4AEBF] rounded-xl focus:ring-2 focus:ring-[#8AB0F7] focus:border-[#6DA2F9] appearance-none bg-white font-medium text-gray-700 shadow-sm">
                        <option>Filter Status</option>
                        <option>Active</option>
                        <option>Inactive</option>
                    </select>
                    
                    {/* Skill Filter */}
                    <select className="p-3 border border-[#A4AEBF] rounded-xl focus:ring-2 focus:ring-[#8AB0F7] focus:border-[#6DA2F9] appearance-none bg-white font-medium text-gray-700 shadow-sm">
                        <option>Filter Skill</option>
                        <option>React</option>
                        <option>Laravel</option>
                    </select>
                    
                    {/* Sort Dropdown */}
                    <select className="p-3 border border-[#A4AEBF] rounded-xl focus:ring-2 focus:ring-[#8AB0F7] focus:border-[#6DA2F9] appearance-none bg-white font-medium text-gray-700 shadow-sm">
                        <option>Sort by Performance</option>
                        <option>Sort by Date Joined</option>
                    </select>
                </div>
            </div>

            {/* Developers Card Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4">
                
                {/* Loop through developersData */}
                {developersData.map((dev) => (
                    <div key={dev.id} 
                         // Card Background: White. Stronger Shadow/Lift
                         className="bg-white rounded-2xl shadow-2xl shadow-[#A4AEBF]/10 transform hover:shadow-2xl hover:scale-[1.02] transition duration-300 ease-in-out border border-gray-100">
                        
                        <div className="p-6">
                            
                            {/* Profile Info / Status Badge */}
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex items-center">
                                    <img className="h-12 w-12 rounded-full object-cover border-3 border-white shadow-lg mr-3" src={dev.image} alt={dev.name}/>
                                    <div>
                                        <h2 className="text-xl font-bold text-gray-900">{dev.name}</h2>
                                        {/* Primary Accent Text: #6DA2F9 */}
                                        <p className="text-sm font-medium text-[#6DA2F9]">{dev.email}</p>
                                    </div>
                                </div>
                                
                                {/* Status Badge (Higher Contrast) */}
                                <span className={`${dev.active ? 'bg-green-500 text-white' : 'bg-red-500 text-white'} px-3 py-1 text-xs font-bold rounded-full shadow-md mt-1`}>
                                    {dev.active ? 'Active' : 'Inactive'}
                                </span>
                            </div>
                            
                            {/* Performance Score Section */}
                            <div className="mt-4 pt-4 border-t border-gray-100">
                                <p className="text-sm font-semibold text-gray-700 mb-2">Performance Score:</p>
                                <div className="flex items-center space-x-4">
                                    <span className="text-3xl font-extrabold text-gray-900">{dev.performanceScore}%</span>
                                    {/* Progress Bar */}
                                    <div className="w-full h-2 rounded-full bg-[#A4AEBF]/40">
                                         <div style={{ width: `${dev.performanceScore}%` }} 
                                              className={`${dev.performanceScore >= 80 ? 'bg-green-500' : 'bg-yellow-500'} h-2 rounded-full transition-all duration-500`}>
                                         </div>
                                    </div>
                                </div>
                            </div>

                            {/* Completed / In Progress Stats */}
                            <div className="flex justify-between text-center mt-6 p-3 bg-[#F8F9FC] rounded-lg border border-[#A4AEBF]/10">
                                <div className="w-1/2 border-r border-[#A4AEBF]/30">
                                    <p className="text-xs text-gray-500 uppercase">Completed</p>
                                    <p className="text-3xl font-extrabold text-green-600 mt-1">{dev.completed}</p>
                                </div>
                                <div className="w-1/2">
                                    <p className="text-xs text-gray-500 uppercase">In Progress</p>
                                    <p className="text-3xl font-extrabold text-yellow-600 mt-1">{dev.inProgress}</p>
                                </div>
                            </div>

                            {/* Skills - Use Light Accent Background */}
                            <div className="mt-6">
                                <p className="text-sm font-semibold text-gray-700 mb-2">Key Skills:</p>
                                <div className="flex flex-wrap gap-2">
                                    {dev.skills.slice(0, 3).map((skill, index) => (
                                        <span key={index}
                                              className="px-3 py-1.5 text-xs font-semibold bg-[#8AB0F7]/40 text-gray-800 rounded-lg hover:bg-[#8AB0F7]/60 transition">
                                            {skill}
                                        </span>
                                    ))}
                                    {dev.skills.length > 3 && (
                                        <span className="text-xs text-gray-500 self-center">
                                            +{dev.skills.length - 3}
                                        </span>
                                    )}
                                </div>
                            </div>

                        </div>
                        
                        {/* Footer/Actions - Primary Accent Link: #6DA2F9 */}
                        <div className="p-4 border-t border-gray-100 flex justify-between bg-[#F8F9FC] rounded-b-2xl">
                            <a href={`/developer/${dev.id}`} className="text-sm font-bold text-[#6DA2F9] hover:text-[#8AB0F7] transition">
                                View Full Profile &rarr;
                            </a>
                            <button className={`${dev.active ? 'text-red-500 hover:text-red-700' : 'text-green-500 hover:text-green-700'} text-sm font-bold transition`}>
                                {dev.active ? 'Deactivate' : 'Activate'}
                            </button>
                        </div>

                    </div>
                ))}
                
            </div>

        </div>
    );
};