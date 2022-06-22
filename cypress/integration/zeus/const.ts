/* eslint-disable */

export const AllTypesProps: Record<string,any> = {
	Query:{
		author:{

		},
		bookByName:{

		}
	},
	CreateBookInput:{

	},
	Mutation:{
		createBook:{
			input:"CreateBookInput"
		}
	}
}

export const ReturnTypes: Record<string,any> = {
	Library:{
		id:"ID",
		name:"String",
		address:"String",
		books:"Book"
	},
	Book:{
		id:"ID",
		title:"String",
		description:"String",
		totalPages:"Int",
		author:"Author",
		rent:"Int",
		isRented:"Boolean"
	},
	Author:{
		id:"ID",
		name:"String"
	},
	Query:{
		libraries:"Library",
		library:"Library",
		authors:"Author",
		author:"Author",
		books:"Book",
		bookByName:"Book"
	},
	Mutation:{
		createBook:"Book"
	}
}

export const Ops = {
query: "Query" as const,
	mutation: "Mutation" as const
}