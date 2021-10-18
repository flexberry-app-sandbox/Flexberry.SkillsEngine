﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.SkillsEngine
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Person skill.
    /// </summary>
    // *** Start programmer edit section *** (PersonSkill CustomAttributes)

    // *** End programmer edit section *** (PersonSkill CustomAttributes)
    [AutoAltered()]
    [Caption("Person skill")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("PersonSkillE", new string[] {
            "ApprovedAt as \'Approved at\'",
            "Skill as \'Skill\'",
            "Skill.Name as \'Name\'"}, Hidden=new string[] {
            "Skill.Name"})]
    [MasterViewDefineAttribute("PersonSkillE", "Skill", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Name")]
    public class PersonSkill : ICSSoft.STORMNET.DataObject
    {
        
        private System.DateTime fApprovedAt;
        
        private IIS.SkillsEngine.Skill fSkill;
        
        private IIS.SkillsEngine.Person fPerson;
        
        // *** Start programmer edit section *** (PersonSkill CustomMembers)

        // *** End programmer edit section *** (PersonSkill CustomMembers)

        
        /// <summary>
        /// ApprovedAt.
        /// </summary>
        // *** Start programmer edit section *** (PersonSkill.ApprovedAt CustomAttributes)

        // *** End programmer edit section *** (PersonSkill.ApprovedAt CustomAttributes)
        public virtual System.DateTime ApprovedAt
        {
            get
            {
                // *** Start programmer edit section *** (PersonSkill.ApprovedAt Get start)

                // *** End programmer edit section *** (PersonSkill.ApprovedAt Get start)
                System.DateTime result = this.fApprovedAt;
                // *** Start programmer edit section *** (PersonSkill.ApprovedAt Get end)

                // *** End programmer edit section *** (PersonSkill.ApprovedAt Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (PersonSkill.ApprovedAt Set start)

                // *** End programmer edit section *** (PersonSkill.ApprovedAt Set start)
                this.fApprovedAt = value;
                // *** Start programmer edit section *** (PersonSkill.ApprovedAt Set end)

                // *** End programmer edit section *** (PersonSkill.ApprovedAt Set end)
            }
        }
        
        /// <summary>
        /// Person skill.
        /// </summary>
        // *** Start programmer edit section *** (PersonSkill.Skill CustomAttributes)

        // *** End programmer edit section *** (PersonSkill.Skill CustomAttributes)
        [NotNull()]
        public virtual IIS.SkillsEngine.Skill Skill
        {
            get
            {
                // *** Start programmer edit section *** (PersonSkill.Skill Get start)

                // *** End programmer edit section *** (PersonSkill.Skill Get start)
                IIS.SkillsEngine.Skill result = this.fSkill;
                // *** Start programmer edit section *** (PersonSkill.Skill Get end)

                // *** End programmer edit section *** (PersonSkill.Skill Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (PersonSkill.Skill Set start)

                // *** End programmer edit section *** (PersonSkill.Skill Set start)
                this.fSkill = value;
                // *** Start programmer edit section *** (PersonSkill.Skill Set end)

                // *** End programmer edit section *** (PersonSkill.Skill Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.SkillsEngine.Person.
        /// </summary>
        // *** Start programmer edit section *** (PersonSkill.Person CustomAttributes)

        // *** End programmer edit section *** (PersonSkill.Person CustomAttributes)
        [Agregator()]
        [NotNull()]
        public virtual IIS.SkillsEngine.Person Person
        {
            get
            {
                // *** Start programmer edit section *** (PersonSkill.Person Get start)

                // *** End programmer edit section *** (PersonSkill.Person Get start)
                IIS.SkillsEngine.Person result = this.fPerson;
                // *** Start programmer edit section *** (PersonSkill.Person Get end)

                // *** End programmer edit section *** (PersonSkill.Person Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (PersonSkill.Person Set start)

                // *** End programmer edit section *** (PersonSkill.Person Set start)
                this.fPerson = value;
                // *** Start programmer edit section *** (PersonSkill.Person Set end)

                // *** End programmer edit section *** (PersonSkill.Person Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "PersonSkillE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View PersonSkillE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("PersonSkillE", typeof(IIS.SkillsEngine.PersonSkill));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of PersonSkill.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfPersonSkill CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfPersonSkill CustomAttributes)
    public class DetailArrayOfPersonSkill : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.SkillsEngine.DetailArrayOfPersonSkill members)

        // *** End programmer edit section *** (IIS.SkillsEngine.DetailArrayOfPersonSkill members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type PersonSkill by index.
        /// </summary>
        /// <summary>
        /// Adds object with type PersonSkill.
        /// </summary>
        public DetailArrayOfPersonSkill(IIS.SkillsEngine.Person fPerson) : 
                base(typeof(PersonSkill), ((ICSSoft.STORMNET.DataObject)(fPerson)))
        {
        }
        
        public IIS.SkillsEngine.PersonSkill this[int index]
        {
            get
            {
                return ((IIS.SkillsEngine.PersonSkill)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.SkillsEngine.PersonSkill dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
